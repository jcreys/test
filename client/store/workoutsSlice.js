import axios from 'axios'
import history from '../history'
/**
 * ACTION TYPES
 */
const FETCH_WORKOUTS = 'FETCH_WORKOUTS'
const workouts = (state = [], action)=>{
  if(action.type === FETCH_WORKOUTS){
    return action.workouts
  }
  return state
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
