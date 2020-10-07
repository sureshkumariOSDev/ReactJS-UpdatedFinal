import React, { Component } from 'react';
import Counter from '../components/Counter';
import './App.css';
//import PropTypes from 'prop-types'

//{data:10}

type AppProps = {
  data: number
}

type AppState = {
  counter: number,
  name: string
}
class App extends Component<AppProps, AppState> {
  // static propTypes = {
  //   data: PropTypes.number.isRequired
  // }
  state: AppState = {
    counter: 0,
    name: ''
  }
  increaseCounterHandler: Function = (): void => {
    // this.setState({
    //   counter: 10
    // },()=>{});
    // this.setState((currentState) => {
    //   return {
    //     counter: currentState.counter + 1
    //   };
    // },
    //   () => {
    //     console.log(this.state)
    //   });
    this.setState((currentState: AppState, propsData: AppProps): AppState => {
      return {
        ...currentState,
        counter: currentState.counter + propsData.data
      };
    },
      (): void => {
        console.log(this.state)
      });
  }

  render(): any {
    return (
      <div className="App" >
        <span>Counter Value:&nbsp;{this.state.counter}</span>
        <br />
        <button onClick={this.increaseCounterHandler}>Increase Counter From Parent</button>
        <br />
        <Counter />
      </div>
    );
  }
}

export default App;
