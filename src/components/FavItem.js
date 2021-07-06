import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export class FavItem extends Component {
    render() {
        return (
          <div style={{ display: "inline-block" }}>
                <div style={{ display: "inline-block" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{this.props.strDrink}</Card.Title>

            <Button variant="primary" onClick={()=>{this.props.remove(this.props.id)}} >Remove</Button>
            <Button variant="primary"  onClick={()=>{this.props.showForm(this.props)}}>Update</Button>
          </Card.Body>
        </Card>
      </div>
            </div>
        )
    }
}

export default FavItem
