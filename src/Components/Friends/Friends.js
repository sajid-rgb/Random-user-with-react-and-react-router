import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Friends = (props) => {
    const {handleClick,friend}= props
    const {gender,name,picture,location,email,id} = friend;
    const {title,first,last}=name;
    const {thumbnail,large,medium} =picture;
    const {street,city,state,country} = location;
    const {number} = street;
    const {value} = id;
    return (
        <div className="col-lg-4 mt-3">
             <Container>
             <Card className="w-100 text-center">
            <Card.Img src={large} className="w-md-100 w-100" style={{height:'350px'}}></Card.Img>
                <Card.Body>
                <Card.Title><h5>{title} {first} {last}</h5>
                <p>{gender}</p>
                </Card.Title>
                <Link to={"/"+first}>More Details</Link>
                <div style={{margin:'0 auto'}}>
                <button className="btn btn-danger w-md-50 mb-2 " onClick={() =>handleClick(friend,email)}>Add FriedList</button>
                </div>

                </Card.Body>
                
                
            </Card>
             </Container>
        </div>
    );
};

export default Friends;