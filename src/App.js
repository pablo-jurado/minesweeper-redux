import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "./components/board";
import { rightClick } from "./actions";
import "./App.css";

class App extends Component {
  render() {
    console.log(this.props.state);
    return (
      <div className="app">
        <Board state={this.props.state} rightClick={this.props.rightClick} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  rightClick: (x, y) => {
    dispatch(rightClick(x, y));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
