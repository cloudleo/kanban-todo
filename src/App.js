import React from 'react';
import './App.css';
import Column from './Component/Column';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      columns: props.data
    }
  }


  componentDidUpdate(prevProps) {
      window.localStorage.setItem("data", JSON.stringify(this.state.columns));
  }

  handleClick = (e) => {
    let column = e.currentTarget.getAttribute("datacindex");
    const value = window.prompt(" Add card description");
    let columns = this.state.columns;
    columns[column].cards.push({text: value});
    value && this.setState({
      columns,
    });

  }  

  handleChange = (e) => {
    let value = e.currentTarget.getAttribute("name");
    let indexColumn = +e.currentTarget.getAttribute("datacindex");
    let index = +e.currentTarget.getAttribute("dataindex");
    let columns = this.state.columns;

    let temp = columns[indexColumn].cards[index];
    if(value === "left"){
      columns[indexColumn].cards.splice(index,1);
      columns[indexColumn - 1].cards.push(temp);

    }else{
      columns[indexColumn].cards.splice(index,1);
      columns[indexColumn + 1].cards.push(temp);
    }
    this.setState({
      columns,
    })    
  }

  handleDelete = (e) => {
    let indexColumn = +e.currentTarget.getAttribute("datacindex");
    let index = +e.currentTarget.getAttribute("dataindex");
    let columns = this.state.columns;
    columns[indexColumn].cards.splice(index,1);
    this.setState({
      columns,
    })     
  }

  render(){
    return (
      <div className="App">
        {  this.state.columns.map((el,index) => (
            <Column index={index} 
                  key={`Columnkey=${index}`} 
                  handleDelete={this.handleDelete}
                  handleClick={this.handleClick} 
                  handleChange={this.handleChange} 
                  {...el} 

            />
          ))
        }
      </div>
    );
  }
}


// 20 mill used carss

//15 fields for vehicle
