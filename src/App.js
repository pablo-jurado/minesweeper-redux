import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "./components/board";
import "./App.css";

class App extends Component {
  render() {
    console.log(this.props.state);
    return (
      <div className="app">
        <Board state={this.props.state} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(
  mapStateToProps,
  null
)(App);
