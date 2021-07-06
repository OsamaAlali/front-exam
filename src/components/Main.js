import React, { Component } from "react";
import MainItem from "./MainItem";
import axios from "axios";
import { async } from "q";
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_URL,
      apiData: [],
    };
  }
  componentDidMount=async(req,res)=>{
    await axios.get(`${this.state.url}/drink`).then(response=>{
        this.setState({
            apiData: response.data
        })
    })
  }

addFav=async(strDrink,strDrinkThumb,idDrink)=>{
  const reqbody={
    strDrink: strDrink,
    strDrinkThumb: strDrinkThumb,
    idDrink: idDrink
  }  

  await axios.post(`${this.state.url}/drink/fav`,reqbody).then(response=>{alert(response.data)})
  
}

  render() {
    return (
      <div>
          { this.state.apiData.length > 0? 
          this.state.apiData.map((item,idx)=>{
          return( 
       <MainItem
        strDrink ={item.strDrink}
        strDrinkThumb ={item.strDrinkThumb}
        idDrink ={item.idDrink}
        key={idx}
        addFav={this.addFav}
        />)
          })
        
        : <h3>Waite......</h3>

          }
      </div>
    );
  }
}

export default Main;
