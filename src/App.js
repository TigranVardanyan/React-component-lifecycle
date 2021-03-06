import React, {Component} from 'react'
import {unmountComponentAtNode} from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Counter from "./components/Counter/Counter";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';


import styles from "./App.module.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
import GetSnapshotBeforeUpdate from "./components/getSnapshotBeforeUpdate/getSnapshotBeforeUpdate";

class App extends Component {
    constructor(props) {
        console.log("%c[App] Constructor", "color:orange");
        super(props);
        this.state = {
            count: 0,
            counterOpened: false,
            message: "",
        };
        console.log("%c[App] state - " + this.state.count, "color:orange")
    }

    static getDerivedStateFromProps(props) {
        console.log("%c[App] static getDerivedStateFromProps()]", "color:orange");
        console.log("%c[App]" + "%c write something from props to state", "color:orange", "color:green");
        const {something} = {something: props};
        return {something};
    }

    componentDidMount() {
        fetch("https://api.mocki.io/v1/cc7dcf62") //return {"key":"value"}
            .then(res => res.json())
            .then(
                (result) => {
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
        //eslint-disable-next-line no-useless-concat
        console.log("%c[App]" + "%c side effect - update state(component after request)", "color:orange", "color:green");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (true) {
            console.log("%c[App] shouldComponentUpdate() - true", "color:orange");
            console.log("%c[App] nextState - " + nextState.count, "color:orange");
            return true;
        } else {
            console.log("%c[App] shouldComponentUpdate() - false", "color:orange");
            console.log("%c[App] nextState - " + nextState.count, "color:orange");
            return false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("%c[App] componentDidUpdate()", "color:orange");
        console.log("%c[App] prevState - " + prevState.count, "color:orange");
        console.log("");
    }

    componentWillUnmount() {
        console.log("");
        console.log("%c[App] componentWillUnmount()", "color:orange");
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

    changeCount(operator, value) {
        if (operator === "+") {
            this.setState((prevState) => {
                return {
                    count: prevState.count + value
                }
            }, () => console.log("%c[App] setState() callback", "color:orange"))
        }
        if (operator === "-") {
            this.setState((prevState) => {
                return {
                    count: prevState.count - value
                }
            }, () => console.log("%c[App] setState() callback", "color:orange"))
        }
    }

    counterInputChange = (count) => {
        this.setState({count: count})
    }

    receivingMessages = () => {
        let message = document.createElement("div");
        message.className = styles.message;
        let messageText = document.createTextNode("Some new message");
        message.appendChild(messageText);
        document.getElementById("App").prepend(message);
    }

    render() {
        console.log("%c[App] render()", "color:orange");
        return (
            <React.Fragment>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/GetSnapshotBeforeUpdate">GetSnapshotBeforeUpdate</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/getSnapshotBeforeUpdate">
                                <GetSnapshotBeforeUpdate />
                            </Route>
                            <Route path="/">
                                <Container maxWidth="sm">
                                    <Grid container
                                          justify="center"
                                          direction={"column"}
                                          alignItems={"center"}
                                    >

                                        <h1 className={styles.heading}>Hello, <br/>React component <br/>state and lifecycle!</h1>
                                        <ToggleButton
                                          value="check"
                                          selected={this.state.selected}
                                          onChange={() => {
                                              this.setState((prevState) => {
                                                  return {
                                                      selected: !prevState.selected
                                                  }
                                              })
                                          }}
                                          onClick={() => this.showHideCounter()}
                                        >
                                            {this.state.selected ? "Close" : "Open"} Counter 1
                                        </ToggleButton>
                                        <Grid container
                                              justify="center"
                                              direction={"row"}
                                              alignItems={"center"}
                                        >
                                            <div className={this.state.counterOpened ? "" : styles.hidden}>
                                                <Counter
                                                  count={this.state.count}
                                                  counterOpened={this.state.counterOpened}
                                                  nthCounter={1}
                                                  selfChanges={this.counterInputChange}
                                                />
                                            </div>
                                            <Counter
                                              count={this.state.count}
                                              counterOpened={true}
                                              nthCounter={2}
                                              selfChanges={this.counterInputChange}
                                            />
                                            <p>{this.state.message}</p>
                                        </Grid>
                                        <ButtonGroup variant="contained" aria-label="contained primary button group">
                                            <Button onClick={() => this.changeCount("+", 5)} variant="contained" color="primary">
                                                +5
                                            </Button>
                                            <Button onClick={() => this.changeCount("+", 1)} variant="contained" color="primary">
                                                +1
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
                            </Route>
                        </Switch>
                    </div>
                </Router>
                <CssBaseline/>

            </React.Fragment>
        );
    }
}

export default App;
