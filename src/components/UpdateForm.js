import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder={this.props.oldData.strDrink}   onChange={(e)=>{this.props.setName(e.target.value)}}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Img</Form.Label>
    <Form.Control type="text" placeholder={this.props.oldData.strDrinkThumb} onChange={(e)=>{this.props.setImg(e.target.value)}} />
  </Form.Group>
 
  <Button variant="primary" type="submit" onClick={(e)=>{this.props.updatFav(e,this.props.oldData.id)}}>
    Update
  </Button>
</Form>
            </div>
        )
    }
}

export default UpdateForm
