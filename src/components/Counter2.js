import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";

class Counter extends Component {
  constructor(props) {
    console.log("%c[Counter2] Constructor","color:blue");
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    console.log("%c[Counter2] componentDidMount","color:blue");
  }

  shouldComponentUpdate(nextProps,nextState,nextContext) {
    if (true) {
      //console.log("nextState",nextState.count);
      console.log("%c[Counter2] shouldComponentUpdate() true","color:blue");
      return true;
    }
    else {
      //console.log("nextState",nextState.count);
      console.log("%c[Counter2] shouldComponentUpdate() false","color:blue");
      return false
    }
  }

  componentDidUpdate(prevProps,prevState,snapshot) {
    //console.log("prevState",prevState.count);
    console.log("%c[Counter2] componentDidUpdate()","color:blue");
  }

  componentWillUnmount() {
    console.log("%c[Counter2] componentWillUnmount()","color:blue");
  }

  static getDerivedStateFromProps() {
    console.log("%c[Counter2] static getDerivedStateFromProps()","color:blue");
    return null;
  }

  getSnapshotBeforeUpdate(prevProps,prevState) {
    console.log("%c[Counter2] getSnapshotBeforeUpdate()","color:blue");
    return null;
  }

  // methods

  counterFiledChange(e) {
    this.setState({count:e.target.value}, ()=>console.log("setState() callback"));
  }

  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField id="counterFiled"
                   variant={"outlined"}
                   label="Count"
                   type={"number"}
                   value={this.props.count}
                   onChange={(e) => this.counterFiledChange(e)}
        />
      </form>
    )
  }
}

export default Counter