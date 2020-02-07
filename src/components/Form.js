import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.model = {
            name: '',
            job: '',
        };

        this.state = this.model;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
        return false;
    }
    
    onSubmit = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)

    }

    render() {
        const {name, job } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <label>Name</label>
                <input type="text" value={name} id="name" name="name" onChange={this.handleChange}></input>
                <label>Job</label>
                <input type="text" value={job} id="job" name="job" onChange={this.handleChange}></input>
                <button type="submit">Save</button>
            </form>
        )
    }
}

export default Form;