import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';
import './Main.css'

const Main = (props) => {
    const friends = props.friends
    const [cart,setCart] = useState([]);
    const [isClicked,setIsClicked] = useState(false)
    const handleClick =(friendsItem,email)=>{
        const newCart=[...cart,friendsItem]
        if(cart.includes(friendsItem)===false){
            setCart(newCart)

        }
        else{
            alert("Allready added")
        }
        setIsClicked(true);
    }
    let addeded;
    if(isClicked){
        addeded=<p><small>Successfully added in your team</small></p>
    }
    return (
        <div className="d-flex">
            <div >
                 <span className="text-white text-muted text-center mt-5">
                 {
                    addeded
                }
                 </span>
                <h1 className="text-danger text-center">My total Friends: {cart.length}</h1>
            <div className="friends-div row">
            {
                friends.map(fr=><Friends friend={fr} handleClick = {handleClick}></Friends>)
            }
        </div>
        </div>
            


        </div>
    );
};

export default Main;