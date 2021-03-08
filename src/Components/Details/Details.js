import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Router, Switch, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = ({friends}) => {
    const {first} = useParams()
    const {gender,name,picture,location,email,cell,dob} = friends.find(fr=>first===fr.name.first)
    console.log(gender);
    const {title,last}=name;
    const {thumbnail,large,medium} =picture;
    const {street,city,state,country} = location;
    const {number} = street;
    const {date,age} = dob;
    return (
           <Container>
                       <div className="card mt-5">
            <div className='row'>
            <div className="col-md-5" style={{}}>
                <img src={large} className='w-100 card-img-top' alt=""/>

            </div>
            <div className="col-md-7 text-center text-md-left mt-5">
                
                <div style={{lineHeight: .2}}>
                <h5>{title} {name.first} {last}</h5>
                <h6>{gender}</h6>
                <p>Date of Birth: {date}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                <p>Cell: {cell}</p>
                </div>
                <h3 className="text-info text-start">Location</h3>
                <div className="text-dark " style={{ lineHeight: .2}}>
                        <p>Street-no: {number}</p>
                        <p>Street-Name:{street.name}</p>
                        <p>City:{city}</p>
                        <p>Country:{country}</p>
                        
                        </div>
            </div>

        </div>
        
               
        </div>
        <Link to="/home" className="btn btn-primary w-100">Go Home</Link>
           </Container>
    );
};

export default Details;