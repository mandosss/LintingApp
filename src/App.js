import React, { Component } from 'react';
import './App.css';
import { functionTypeAnnotation } from '@babel/types';

class App extends Component {
  constructor (props){
    super(props)
    this.state ={
      formData: {
      valueOne:'',
      valueTwo:'',
      },
      result:"",
      otherResult:'',
      trigger:false,
    }
    this.handlerInputChange = this.handlerInputChange.bind(this)
    this.onClickButton = this.onClickButton.bind(this);
  }     

  mathAddition(x, y){
    return x + y
  };

    onClickButton(e){
      this.setState({result: this.mathAddition(Number(this.state.formData.valueOne), Number(this.state.formData.valueTwo))})
   }

   mathDiv(x,y){
    return x / y
   }

   handlerInputChange(e){
      let formData = Object.assign({}, this.state.formData);
      formData[e.target.name] = e.target.value;
      this.setState({formData})
  }   
  
  render(){
    if(this.state.result){
      return (
        <div>
          <h1>HI EVERYONE!</h1> <br/>
          <h3> The result is {this.state.result}</h3>
        </div>
      )
    }
    else{
    return (
        <div className="App">
            <form>
                  Input First Number:<br/>
              <input type="number" name="valueOne"      
                  onChange={this.handlerInputChange}/><br/>
              Input Second Number: <br/>
              <input type='number' name='valueTwo' 
                  onChange={this.handlerInputChange}/><br/>
            </form>
            <button type='button' onClick={this.onClickButton}>
              Touch me!
              </button>
        </div>
      );
    }
  }
}

export default App;
