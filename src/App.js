import React, {Component} from 'react'
import './App.css';

//class App extends Component {
//  constructor() {
//    super();
//    this.state = {
//      sayHello: "Hello",
//    };
//    console.log("[Constructor]")
//  }
//  changeHello(){
//    this.setState({sayHello:"Hello Tigran"})
//  }
//
//  static getDerivedStateFromProps(props, state) {
//    console.log("[static getDerivedStateFromProps()]");
//    return null;
//  };
//  componentDidiMount() {
//    console.log("[componentDidiMount]")
//  }
//
//  //shouldComponentUpdate() {
//  //  console.log("[shouldComponentUpdate]");
//  //  return false;
//  //};
//
//
//
//  render() {
//    console.log("[render()]");
//    return (
//      <div>
//        Hello React
//        <p>{this.state.sayHello}</p>
//        <button
//          id={"btn"}
//          onClick={this.changeHello}
//          >
//          Button
//        </button>
//      </div>
//    )
//  }
//
//
//}

class App extends React.Component {
  constructor(props) {
    console.log("[Constructor]");
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log("[componentDidMount]");
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.groupEnd()
  }

  shouldComponentUpdate() {
    console.log("[shouldComponentUpdate()]");
    if (Date.now() % 2 == 0) {
      return true;
    } else {
      console.groupEnd()
      return false
    }
  }

  componentDidUpdate() {
    console.log("[componentDidUpdate()]");
    console.groupEnd()
  }

  componentWillUnmount() {
    console.groupEnd()
    console.group("Lifecycle end");
    clearInterval(this.timerID);
    console.log("[componentWillUnmount()]");
    console.groupEnd()
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  static getDerivedStateFromProps() {
    console.group('Lifecycle');
    console.log("[static getDerivedStateFromProps()]");
    return null
  }

  getSnapshotBeforeUpdate() {
    console.log("[getSnapshotBeforeUpdate()]");
    return null
  }


  render() {
    console.log("[render()]");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={() => this.componentWillUnmount()}>Unmount</button>
      </div>
    );
  }
}

export default App;
