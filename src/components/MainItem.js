import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export class MainItem extends Component {
  render() {
      
    return (
        <div style={{ display: "inline-block" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{this.props.strDrink}</Card.Title>

            <Button variant="primary" onClick={()=>{this.props.addFav(this.props.strDrink,this.props.strDrinkThumb,this.props.idDrink)}}>Add-to-favorite</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MainItem;
