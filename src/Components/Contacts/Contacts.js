import React, { useState } from 'react';
import { Button, Form,Col } from 'react-bootstrap';

const Contacts = () => {
    const [isClicked,setIsClicked] = useState(false)
    const submitButtonClick=()=>{
        setIsClicked(true)

    }
    let success;
    if(isClicked){
        success = <h5><small>Successfully submitted</small></h5>
    }
    return (
        <div className='text-white mt-2'>
            
       <Form>
       <Form.Row>
    <Col>
      <Form.Control size="lg" type="text-area" placeholder="Enter Your Queries"/>
    </Col>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label> Current Address</Form.Label>
    <Form.Control placeholder=" Current Address" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Age</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Gender</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Male</option>
        <option>Female</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary"  onClick={submitButtonClick}>
    Submit
  </Button>
</Form>
{
      success
  }
            
         </div>
        
    );
};

export default Contacts;