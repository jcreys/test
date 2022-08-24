import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createWorkout } from '../store'

class CreateWorkout extends Component {
    constructor() {
        super();
        this.state = {
            txt: '',
            error: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(ev){
        ev.preventDefault()
        try {
            await this.props.create(this.state.txt)
            this.setState({txt: '', error: ''})
        }
        catch(ex){
            this.setState({ error: ex.response.data})
        }
    }
    render() {
        const { txt, error } = this.state;
        const { onSubmit } = this;
        return(
            <form onSubmit={ onSubmit }>
                
                <input value={txt} onChange={ ev=> this.setState({txt: ev.target.value})}/>
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
        create: (txt)=> {
            return dispatch(createWorkout(txt))
        }
    }
}

export default connect(null, mapDispatch)(CreateWorkout)