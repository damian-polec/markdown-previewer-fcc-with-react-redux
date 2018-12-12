import React, { Component } from 'react';
import { connect } from 'react-redux';
import Editor from './Components/Editor/Editor';
import Previewer from './Components/Previewer/Previewer';
import * as actionCreators from './store/actionCreators';
import './App.scss';


class App extends Component {
 /* onChangeHandler(e) {
    const value = e.target.value;
    this.setState({text: value});
    console.log(this.state.text);
  }*/
  render() {
    return (
      <div className="App">
        <Editor text={this.props.text} change={this.props.onChangeHandler}/>
        <Previewer text={this.props.text}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeHandler: (e) => dispatch(actionCreators.getTextArea(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
