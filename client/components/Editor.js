import React, { useRef, useEffect, useState, useCallback } from "react";
// import { useParams } from react-router-dom
import { connect } from "react-redux";
// import { exportToHtml } from "../store"
import sample from "./sample.json";
import { render } from "react-dom";
import axios from "axios";

import EmailEditor from "react-email-editor";
export const Editor = (props) => {
  const { pathname } = props.workouts.location;
  const { workouts } = props.workouts;
  const emailEditorRef = useRef(null);
  const [saveData, setsaveData] = useState({})
  //   const { username, workouts, match, params } = props;


  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      //   console.log('>>>>>>>',match)
      const id = pathname.split("/workout/")[1];
      // handleExport({ html: html, id: id, title: title[0].title });
      handleExport({html:html, saveData: design })
    });
  };
  useEffect(()=>{
    const id = pathname.split("/workout/")[1];
    const fetchData = async() => {
      const data = await axios.get(`/api/workouts/${id}`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    })
    
    setsaveData(data)
    onReady(data)
  };

    fetchData()
      .catch(console.error)
    console.log('---R-->',fetchData())
  },[])
  const handleExport = async (html) => {
    try {
      const id = pathname.split("/workout/")[1];
      const resp = await axios.put(`/api/workouts/${id}`, html, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      });
      alert("Output HTML has been logged in your developer console.");
    } catch (ex) {
      console.log(ex.response);
    }
  };
  const onDesignLoad = (data) => {

    console.log("onDesignLoad", saveData);
  };

  const onReady = useCallback((design) => {
    if (!design.data) return; // TODO: is there a better way?

    // editor instance is created
    // you can load your template here;
    emailEditorRef.current.editor.addEventListener(
      "design:loaded",
      onDesignLoad
    );

    console.log('design', design.data)

    Object.keys(design.data?.saveData || {}).length ? emailEditorRef.current.editor.loadDesign(design.data.saveData):emailEditorRef.current.editor.loadDesign(sample);
    console.log('RRR->',design)

  }, []);
  console.log('JJJJJ->',saveData)

  

  return (
    <div>
      <div>
        <button className="emailListEdit" onClick={exportHtml}>Save</button>
      </div>

      <EmailEditor ref={emailEditorRef} onReady={onReady} />
    </div>
  );
};

// const mapDispatch = (dispatch, {params}) => {
//     return {
//         exportToHtml: (html)=>{
//         console.log('>>>>>>', html)
//       },
//     };
//   };
const mapState = (state) => {
  console.log(">>>", state);
  return {
    username: state.auth.username,
    workouts: state.workoutsSlice,
  };
};

export default connect((state) => state, null)(Editor);
