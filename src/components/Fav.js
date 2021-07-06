
import React, { Component } from 'react'
import FavItem from './FavItem'
import axios from 'axios';
import { async } from 'q';
import UpdateForm from './UpdateForm';
export class Fav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          url: process.env.REACT_APP_URL,
          favData: [],
          oldData: '',
          show:false,
          name: '',
          img: ''
        };
      }
      componentDidMount=async(req,res)=>{
        await axios.get(`${this.state.url}/drink/fav`).then(response=>{
            this.setState({
                favData: response.data
            })
        })
      }
    
   remove=async(id)=>{
      await  axios.delete(`${this.state.url}/drink/fav/${id}`);

      axios.get(`${this.state.url}/drink/fav`).then(response=>{
        this.setState({
            favData: response.data
        })
    })
   }
      
showForm=(oldData)=>{
    this.setState({
        oldData: oldData,
        show :true
    })
}
    
setName=(name)=>{
    this.setState({
        name:name
    })
}

setImg=(img)=>{
    this.setState({
        img:img
    })
}

updatFav=async(e,id)=>{
    e.preventDefault()
    const reqbody={
        strDrink: this.state.name,
        strDrinkThumb: this.state.img,
    }

    await axios.put(`${this.state.url}/drink/fav/${id}`,reqbody).then(Response=>{
        this.setState({
            favData: Response.data,
            show:false
        })
    })
}

    
      render() {
        return (
          <div>
             
             {this.state.show && (

             <UpdateForm
             oldData={this.state.oldData}
             setName={this.setName}
             setImg={this.setImg}
             updatFav={this.updatFav}
             />
             
             
             )}
            
              { this.state.favData.length > 0? 
              this.state.favData.map((item,idx)=>{
              return( 
           <FavItem
            strDrink ={item.strDrink}
            strDrinkThumb ={item.strDrinkThumb}
            idDrink ={item.idDrink}
            key={idx}
            id={item._id}
            remove={this.remove}
            showForm={this.showForm}
            />)
              })
            
            : <h3>Waite......</h3>
    
              }
          </div>
        );
      }
    }

export default Fav
