import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import CreateWorkout from './CreateWorkout';
import { deleteWorkout } from '../store'
/**
 * COMPONENT
 */
export const Home = props => {
  const {username,workouts,deleteWorkout} = props


  return (
    <div>
      <CreateWorkout/>
      <h3>Welcome, {username}</h3>
      <h4>You have {workouts.length} workouts stored</h4>
      <ul>
        {
          workouts.map(workout => {
            return (
              <div>
                <li key={workout.id}>
                  {workout.txt}
                </li> 
                <button onClick={()=>deleteWorkout(workout)}>x</button>
              </div>
              
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

const mapDispatch = (dispatch)=>{
  return {
    deleteWorkout: (workout)=> dispatch(deleteWorkout(workout))
  }
}

export default connect(mapState, mapDispatch)(Home)
