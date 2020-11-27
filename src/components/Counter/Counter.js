import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";


import styles from "./Counter.module.css";

class Counter extends Component {
    constructor(props) {
        super(props);
        console.log(`%c[Counter${this.props.nthCounter}] Constructor`, "color:blue");
        this.state = {
            count: 0,
            counterOpened: true,
            selfCount: false,
        };
    }

    componentDidMount() {
        console.log(`%c[Counter${this.props.nthCounter}] componentDidMount`, "color:blue");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if ((nextProps.counterOpened === true && (this.props.count !== nextProps.count)) ||
            (this.props.counterOpened === false && nextProps.counterOpened === true && this.state.selfCount !== nextProps.count)) {
            console.log(`%c[Counter${this.props.nthCounter}] shouldComponentUpdate() true`, "color:blue");
            this.setState({selfCount:nextProps.count})
            return true;
        } else {
            console.log(`%c[Counter${this.props.nthCounter}] shouldComponentUpdate() false`, "color:blue");
            return false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`%c[Counter${this.props.nthCounter}] componentDidUpdate()`, "color:blue");
        console.log("")
    }

    componentWillUnmount() {
        console.log(`%c[Counter${this.props.nthCounter}] componentWillUnmount()`, "color:blue");
    }

    static getDerivedStateFromProps(props) {
        console.log(`%c[Counter${props.nthCounter}] static getDerivedStateFromProps()`, "color:blue");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`%c[Counter${this.props.nthCounter}] getSnapshotBeforeUpdate()`, "color:blue");
        return null;
    }

    // methods

    sendData = (count) => {
        count = parseInt(count)
        this.props.parentCallback(count);
    }


    render() {
        return (
            <form
                noValidate
                autoComplete="off"
                className={styles.counter}
            >
                {console.log(`%c[Counter${this.props.nthCounter}] render()`, "color:blue")}
                <TextField id="counterFiled"
                           variant={"outlined"}
                           label={`Counter ${this.props.nthCounter}`}
                           type={"number"}
                           value={this.props.count}
                           onChange={(e) => this.sendData(e.target.value)}
                />
            </form>

        )
    }
}

export default Counter