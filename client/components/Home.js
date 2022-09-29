import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import CreateWorkout from "./CreateWorkout";
import { deleteWorkout } from "../store";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username, workouts, deleteWorkout } = props;
  // useEffect(()=>{
  //   console.log('>>>>>',props)
  // })

  return (
    <div>
      <Route component= { CreateWorkout } />
      <h3>Welcome, {username}</h3>
      <h4>You have {workouts.length} workouts stored</h4>
     
      <ul>
        {workouts.map((workout) => {
          return (
            <li key={workout.id}>
              <Link to={`/workout/${workout.id}`}>
                {workout.id} - {workout.title}
              </Link>
              <button onClick={() => deleteWorkout(workout)}>x</button>
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
  console.log(state);
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

export default connect(mapState, mapDispatch)(Home);
