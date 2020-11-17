import React, {Component} from 'react'
import {unmountComponentAtNode} from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import BottomNavigation from '@material-ui/core/BottomNavigation';
//import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import RestoreIcon from '@material-ui/icons/Restore';
//import FolderIcon from '@material-ui/icons/Folder';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends React.Component {
  constructor(props) {
    console.log("[Constructor]");
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    fetch("https://api.mocki.io/v1/cc7dcf62") //return {"count":"1"}
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result",result);
          this.setState({
            count: parseInt(result.count)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("error",error);
        }
      )
    console.log("[componentDidMount]");
    console.groupEnd();
  }

  shouldComponentUpdate(nextProps,nextState,nextContext) {
    if (nextState.count <= 25 && nextState.count >= -25) {
      console.log("nextState",nextState.count);
      console.log("[shouldComponentUpdate() true]");
      return true;
    }
    else {
      console.log("nextState",nextState.count);
      console.log("[shouldComponentUpdate() false]");
      console.groupEnd();
      return false
    }
  }

  componentDidUpdate(prevProps,prevState,snapshot) {
    console.log("prevState",prevState.count);
    console.log("[componentDidUpdate()]");
    console.groupEnd();
  }

  componentWillUnmount() {
    console.groupEnd();
    console.group("Lifecycle end");
    console.log("[componentWillUnmount()]");
    console.groupEnd();
  }

  changeCount(operator, value) {
    //if (this.state.count <= 25) {
      if (operator === "+") {
        this.setState({
          count: this.state.count + value
        }, ()=>console.log("setState() callback"))
      }
    //}
    //if (this.state.count >= -25) {
      if (operator === "-") {
        this.setState({
          count: this.state.count - value
        }, ()=>console.log("setState() callback"))
      }
    //}
  }

  static getDerivedStateFromProps() {
    console.group('Lifecycle');
    console.log("[static getDerivedStateFromProps()]");
    return null;
  }

  getSnapshotBeforeUpdate() {
    console.log("[getSnapshotBeforeUpdate()]");
    return null;
  }

  handleClick() {
    unmountComponentAtNode(document.getElementById('root'));
  }

  counterFiledChange(e) {
    this.setState({count:e.target.value}, ()=>console.log("setState() callback"));
  }

  render() {
    console.log("[render()]");
    console.log("state",this.state.count);
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
            <form noValidate autoComplete="off">
              <TextField id="counterFiled"
                         variant={"outlined"}
                         label="Count"
                         type={"number"}
                         value={this.state.count}
                         onChange={(e) => this.counterFiledChange(e)}
              />
            </form>
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
        {/*<BottomNavigation*/}
        {/*  showLabels*/}
        {/*>*/}
        {/*  <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />*/}
        {/*  <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />*/}
        {/*  <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />*/}
        {/*</BottomNavigation>*/}
      </React.Fragment>
    );
  }
}

export default App;
