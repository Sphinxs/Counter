import React, { Component } from "react";

import Navbar from "./navbar";

import Counters from "./counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    this.setState({
      counters: this.state.counters.filter(c => c.id !== counterId)
    });
  };

  handleReset = counterId => {
    this.setState({
      counters: this.state.counters.map(c => {
        c.value = 0;

        return c;
      })
    });
  };

  handleIncrement = counter => {
    const index = this.state.counters.indexOf(counter);

    const c = [...this.state.counters];

    c[index] = { ...counter };

    c[index].value++;

    this.setState({ counters: c });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />

        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
