import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CreateWorkout from "./CreateWorkout";
import { deleteWorkout } from "../store";
import { Editor } from "./Editor";
/**
 * COMPONENT
 */
export const Workout = (props) => {
  const { username, workouts, deleteWorkout, match } = props;
  useEffect(() => {
    console.log('>>>>', props);
  }, []);

  return (
    <div>
        {console.log('??????',workouts)}
      <Editor workouts={props} />
      <ul>
        {workouts
          .filter((workout) => workout.id === match.params.id * 1)
          .map((workout) => {
            return (
              <li key={workout.id}>
                <Link to={`/workout/${workout.id}`}>
                  {workout.id} - {workout.title}
                </Link>
                <button onClick={() => deleteWorkout(workout)}>Delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
//   console.log(state);
  return {
    username: state.auth.username,
    workouts: state.workoutsSlice,
  };
};

const mapDispatch = (dispatch) => {
  return {
    deleteWorkout: (workout) => dispatch(deleteWorkout(workout)),
  };
};

export default connect(mapState, mapDispatch)(Workout);
