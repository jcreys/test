import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createWorkout } from '../store'

class CreateWorkout extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            error: '',
            html: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(ev){
        ev.preventDefault()
        try {
            await this.props.create(this.state.title)
            this.setState({title: '', html:'', error: ''})
        }
        catch(ex){
            this.setState({ error: ex.response.data})
        }
    }
    render() {
        const { title, error } = this.state;
        const { onSubmit } = this;
        return(
            <form onSubmit={ onSubmit }>
                
                <input value={title} onChange={ ev=> this.setState({title: ev.target.value})}/>
                <br></br>
                {error}
                <br></br>
                <button>Add Workout</button>
                
            </form>
        )
    }
}

const mapDispatch = (dispatch)=> {
    return {
        create: (title)=> {
            return dispatch(createWorkout(title))
        }
        
    }
}

export default connect(null, mapDispatch)(CreateWorkout)