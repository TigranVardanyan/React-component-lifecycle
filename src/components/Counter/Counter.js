import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";

class Counter extends Component {
    constructor(props) {
        super(props);
        console.log(`%c[Counter${this.props.nthCounter}] Constructor`, "color:blue");
        this.state = {
            count: 0,
            counterOpened: true
        };
    }

    componentDidMount() {
        console.log(`%c[Counter${this.props.nthCounter}] componentDidMount`, "color:blue");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.counterOpened === true) {
            //console.log("nextState",nextState.count);
            console.log(`%c[Counter${this.props.nthCounter}] shouldComponentUpdate() true`, "color:blue");
            return true;
        } else {
            //console.log("nextState",nextState.count);
            console.log(`%c[Counter${this.props.nthCounter}] shouldComponentUpdate() false`, "color:blue");
            return false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log("prevState",prevState.count);
        console.log(`%c[Counter${this.props.nthCounter}] componentDidUpdate()`, "color:blue");
        console.log("")
    }

    componentWillUnmount() {
        console.log(`%c[Counter${this.props.nthCounter}] componentWillUnmount()`, "color:blue");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(`%c[Counter${nextProps.nthCounter}] static getDerivedStateFromProps()`, "color:blue");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`%c[Counter${this.props.nthCounter}] getSnapshotBeforeUpdate()`, "color:blue");
        return null;
    }

    // methods

    counterFiledChange(e) {
        this.setState({count: e.target.value}, () => console.log("setState() callback"));
    }


    render() {
        return (
                <form noValidate autoComplete="off">
                    {console.log(`%c[Counter${this.props.nthCounter}] render()`, "color:blue")}
                    <TextField id="counterFiled"
                               variant={"outlined"}
                               label={`Counter ${this.props.nthCounter}`}
                               type={"number"}
                               value={this.props.count}
                               onChange={(e) => this.counterFiledChange(e)}
                    />
                </form>

        )
    }
}

export default Counter