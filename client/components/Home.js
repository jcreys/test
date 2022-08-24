import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import CreateWorkout from './CreateWorkout';

/**
 * COMPONENT
 */
export const Home = props => {
  const {username,workouts} = props


  return (
    <div>
      <CreateWorkout/>
      <h3>Welcome, {username}</h3>
      <h4>You have {workouts.length} workouts stored</h4>
      <ul>
        {
          workouts.map(workout => {
            return (
              <li key={workout.id}>
                {workout.txt}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log(state);
  return {
    username: state.auth.username,
    workouts: state.workoutsSlice
  }
}

export default connect(mapState)(Home)
