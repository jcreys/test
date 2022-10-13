import React, { Component } from "react";
import { connect } from "react-redux";
import { createWorkout } from "../store";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import sample from "./sample.json";
import {htmlSample} from './html'

class CreateWorkout extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      error: "",
      html: "",
      saveData: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(ev) {
    ev.preventDefault();
    try {
      await this.props.create(this.state.title, sample, htmlSample);
      this.setState({ title: "", html: "", error: "", saveData: {} });
    } catch (ex) {
      this.setState({ error: ex.response.data });
    }
  }
  render() {
    const { title, error } = this.state;
    const { onSubmit } = this;
    return (
      <form onSubmit={onSubmit}>
        Create Email:<br></br>
        <input
          value={title}
          onChange={(ev) => this.setState({ title: ev.target.value })}
        />
        <br></br>
        {error}
        <br></br>
        <button className="emailListEdit">Create Entry</button>
      </form>
    );
  }
}

const mapDispatch = (dispatch, { history }) => {
  return {
    create: (title, sample, htmlSample) => {
      return dispatch(createWorkout(title, sample, htmlSample, history));
    },
  };
};

export default connect(null, mapDispatch)(CreateWorkout);
