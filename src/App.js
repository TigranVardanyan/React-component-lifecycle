import React, {Component} from 'react'
import {unmountComponentAtNode} from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter2";
import './App.css';
import Modal from "@material-ui/core/Modal";

import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    console.log("%c[App] Constructor", "color:orange");
    super(props);
    this.state = {
      count: '0',
      counterOpened: false
    };
    console.log("%c[App] state - " + this.state.count, "color:orange")
  }

  static getDerivedStateFromProps(props) {
    //console.group('Lifecycle');
    console.log("%c[App] static getDerivedStateFromProps()]", "color:orange");
    console.log("%c[App]" + "%c side effect - write something from props to state", "color:orange", "color:green");
    const {something} = {something:props};
    return {something};
  }

  componentDidMount() {
    fetch("https://api.mocki.io/v1/cc7dcf62") //return {"count":"1"}
      .then(res => res.json())
      .then(
        (result) => {
          //console.log("result",result);
          this.setState({
            count: parseInt(result.count)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.error("error", error);
        }
      );
    console.log("%c[App] componentDidMount", "color:orange");
    //console.log("");
    //eslint-disable-next-line no-useless-concat
    console.log("%c[App]" + "%c side effect - update state(component after request)", "color:orange", "color:green");
    //console.log("");
    //console.groupEnd();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (true) {
      console.log("%c[App] shouldComponentUpdate() - true", "color:orange");
      console.log("%c[App] nextState - " + nextState.count, "color:orange");
      return true;
    }
    else {
      console.log("%c[App] shouldComponentUpdate() - false", "color:orange");
      console.log("%c[App] nextState - " + nextState.count, "color:orange");
      //console.groupEnd();
      return false
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("%c[App] componentDidUpdate()", "color:orange");
    console.log("%c[App] prevState - " + prevState.count, "color:orange");
    //console.log("");
    //console.groupEnd();

    //for demonstrate not use setState here
    //this.setState({count:1})
  }

  componentWillUnmount() {
    //console.groupEnd();
    //console.group("Lifecycle end");
    console.log("");
    console.log("%c[App] componentWillUnmount()", "color:orange");
    //console.groupEnd();
  }

  changeCount(operator, value) {
    if (operator === "+") {
      this.setState({
        count: this.state.count + value
      }, () => console.log("%c[App] setState() callback", "color:orange"))
    }
    if (operator === "-") {
      this.setState({
        count: this.state.count - value
      }, () => console.log("%c[App] setState() callback", "color:orange"))
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("%c[App] getSnapshotBeforeUpdate()]", "color:orange");
    return null;
  }

  // methods
  handleClick() {
    unmountComponentAtNode(document.getElementById('root'));
  }

  showHideCounter() {
    if (this.state.counterOpened === true) {
      this.setState({counterOpened: false})
    } else {
      this.setState({counterOpened: true})
    }
  }

  render() {
    console.log("%c[App] render()", "color:orange");
    console.log(this.state);
    //console.log("state",this.state.count);
    return (
      <React.Fragment>
        <CssBaseline/>
        <Container maxWidth="sm">
          <Grid container
                justify="center"
                direction={"column"}
                alignItems={"center"}
          >
            <h1>Hello, <br/>React component lifecycle!</h1>
            <button type="button" onClick={() =>this.showHideCounter()}>
              Open Modal
            </button>
            <div className={this.state.counterOpened ? "" : styles.hidden}>
              {console.log(styles.hidden)}
              <Counter count={this.state.count} counterOpened={this.state.counterOpened}/>
            </div>
            {/*todo why child not update after getSnapshot and whait parent getSnapshot*/}
            {/*[Counter] static getDerivedStateFromProps()*!/*/}
            {/*Counter.js:19 [Counter] shouldComponentUpdate() true*/}
            {/*Counter2.js:39 [Counter2] static getDerivedStateFromProps()*/}
            {/*Counter2.js:19 [Counter2] shouldComponentUpdate() true*/}
            {/*Counter.js:44 [Counter] getSnapshotBeforeUpdate()*/}
            {/*Counter2.js:44 [Counter2] getSnapshotBeforeUpdate()*/}
            {/*App.js:98 [App] getSnapshotBeforeUpdate()]*/}
            {/*Counter.js:31 [Counter] componentDidUpdate()*/}
            {/*Counter2.js:31 [Counter2] componentDidUpdate()*/}
            {/*App.js:67 [App] componentDidUpdate()*/}
            {/*App.js:68 [App] prevState - 1*/}
            {/*App.js:86 [App] setState() callback*/}
            {/*<Counter2 count={this.state.count}/>*/}
            <ButtonGroup variant="contained" aria-label="contained primary button group">
              <Button onClick={() => this.changeCount("+", 1)} variant="contained" color="primary">
                +1
              </Button>
              <Button onClick={() => this.changeCount("+", 5)} variant="contained" color="primary">
                +5
              </Button>
              <Button onClick={() => this.changeCount("-", 5)} variant="contained" color="secondary">
                -5
              </Button>
              <Button onClick={() => this.changeCount("-", 10)} variant="contained" color="secondary">
                -10
              </Button>
            </ButtonGroup>
            <br/>
            <Button onClick={() => this.handleClick()} variant="contained">Unmount</Button>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
