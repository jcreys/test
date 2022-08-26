import React, { useRef, useEffect } from "react";
import { connect } from "react-redux"
// import { exportToHtml } from "../store"
import { render } from "react-dom";
import axios from "axios";

import EmailEditor from "react-email-editor";

export const Editor = (props) => {
    const { pathname } = props.workouts.location;
    const { workouts } = props.workouts

  const emailEditorRef = useRef(null);
//   const { username, workouts, match, params } = props;

  useEffect(()=>{
    console.log('--------', props.workouts)
  },[])
    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
          const { design, html } = data;
        //   console.log('exportHtml', html);
        //   console.log('>>>>>>>',match)
          const id = pathname.split('/workout/')[1]
          const title = workouts.filter(item => item.id === id*1)
          console.log('JJJJJJJ->', name)
            handleExport({html: html, id: id, title: title[0].title})
        });
      };

    const handleExport = async(html)=>{
        try{
            console.log('XXXXXX->',html.title)

            const resp = await axios.put(`/api/workouts/${html.id}`, html,{
                headers: {
                  authorization: window.localStorage.getItem('token')
                }
              });
            console.log(resp.data);
        }catch(ex){
            console.log(ex.response)
        }
    }
  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
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
      console.log('>>>',state);
      return {
        username: state.auth.username,
        workouts: state.workoutsSlice,
      };
};

  export default connect(state => state, null)(Editor);
