import axios from 'axios'
import history from '../history'
/**
 * ACTION TYPES
 */
const FETCH_WORKOUTS = 'FETCH_WORKOUTS'
const CREATE_WORKOUT = 'CREATE_WORKOUT'
const DELETE_WORKOUT = 'DELETE_WORKOUT'
const workouts = (state = [], action)=>{
  if(action.type === FETCH_WORKOUTS){
    return action.workouts
  }
  if(action.type === CREATE_WORKOUT){
    return [...state, action.workout]
  }
  if(action.type === DELETE_WORKOUT){
    return state.filter(workout => workout.id != action.workout.id)
  }
  return state
}
export const createWorkout = (title, saveData, html, history)=> {
  return async(dispatch)=>{
    
    const response = await axios.post('/api/workouts', {title,saveData,html}, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    dispatch({ type: CREATE_WORKOUT, workout: response.data})
    history.push(`/workout/${response.data.id}`)
  }
}
export const exportToHtml = (html)=> {
  return async(dispatch)=>{
    const response = await axios.post(`/api/workouts/`, {html}, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    dispatch({ type: CREATE_WORKOUT, workout: response.data})
  }
}
export const deleteWorkout = (workout)=> {
  return async(dispatch)=>{
    await axios.delete(`/api/workouts/${workout.id}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    dispatch({ type: DELETE_WORKOUT, workout})
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
