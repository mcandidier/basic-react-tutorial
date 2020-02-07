import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './components/Table';
import Form from './components/Form';

class App extends Component {
  state = {
    data: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }

  removeItem = index => {
    const { data } = this.state;

    this.setState({
      data: data.filter((item, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = item => {
    const { data } = this.state;
    this.setState({
      data: [data.push(item)]
    })
  }

  render() {
    return (
      <div className="container">
        <Table data={this.state.data} removeItem={this.removeItem} />
        <hr/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
 