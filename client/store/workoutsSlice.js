import axios from 'axios'
import history from '../history'
/**
 * ACTION TYPES
 */
const FETCH_WORKOUTS = 'FETCH_WORKOUTS'
const CREATE_WORKOUT = 'CREATE_WORKOUT'

const workouts = (state = [], action)=>{
  if(action.type === FETCH_WORKOUTS){
    return action.workouts
  } else if(action.type === CREATE_WORKOUT){
    return [...state, action.workout]
  }
  return state
}
export const createWorkout = (txt)=> {
  return async(dispatch)=>{
    const response = await axios.post('/api/workouts', {txt}, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    dispatch({ type: CREATE_WORKOUT, workout: response.data})
  }
}
export const fetchWorkouts = () => {
  return async(dispatch)=> {
    const response = await axios.get('/api/workouts', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    dispatch({type: FETCH_WORKOUTS, workouts: response.data})
  }
}


export default workouts;
