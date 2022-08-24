import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createWorkout } from '../store'

class CreateWorkout extends Component {
    constructor() {
        super();
        this.state = {
            txt: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(ev){
        ev.preventDefault()
        this.props.create(this.state.txt)
        console.log(this.state)
    }
    render() {
        const { txt } = this.state;
        const { onSubmit } = this;
        return(
            <form onSubmit={ onSubmit }>
                <input value={txt} onChange={ ev=> this.setState({txt: ev.target.value})}/>
                <br></br>
                <br></br>
                <button>Add Workout</button>
            </form>
        )
    }
}

const mapDispatch = (dispatch)=> {
    return {
        create: (txt)=> dispatch(createWorkout(txt))
    }
}

export default connect(null, mapDispatch)(CreateWorkout)