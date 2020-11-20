import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";

import styles from "./Counter.css";
class Counter extends Component {
    constructor(props) {
        console.log("%c[Counter] Constructor", "color:blue");
        super(props);
        this.state = {
            count: 0,
            counterOpened: true
        };
    }

    componentDidMount() {
        console.log("%c[Counter] componentDidMount", "color:blue");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.counterOpened === true) {
            //console.log("nextState",nextState.count);
            console.log("%c[Counter] shouldComponentUpdate() true", "color:blue");
            return true;
        } else {
            //console.log("nextState",nextState.count);
            console.log("%c[Counter] shouldComponentUpdate() false", "color:blue");
            return false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log("prevState",prevState.count);
        console.log("%c[Counter] componentDidUpdate()", "color:blue");
    }

    componentWillUnmount() {
        console.log("%c[Counter] componentWillUnmount()", "color:blue");
    }

    static getDerivedStateFromProps() {
        console.log("%c[Counter] static getDerivedStateFromProps()", "color:blue");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("%c[Counter] getSnapshotBeforeUpdate()", "color:blue");
        return null;
    }

    // methods

    counterFiledChange(e) {
        this.setState({count: e.target.value}, () => console.log("setState() callback"));
    }


    render() {
        return (

                <form noValidate autoComplete="off">
                    <TextField id="counterFiled"
                               variant={"outlined"}
                               label="Counter 1"
                               type={"number"}
                               value={this.props.count}
                               onChange={(e) => this.counterFiledChange(e)}
                    />
                </form>

        )
    }
}

export default Counter