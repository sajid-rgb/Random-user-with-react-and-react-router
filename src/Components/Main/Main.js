import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';
import './Main.css'

const Main = (props) => {
    const friends = props.friends;
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
        addeded=<p><small>{cart.length} friends Successfully added in your friend lists</small></p>
    }
    return (
        <div className="d-flex">
            <div >
                 <span className="text-white text-muted text-center mt-5">
                 {
                    addeded
                }
                 </span>
                <h4 className="text-danger text-center">My total Friends: {cart.length}</h4>
            <div className="friends-div row">
            {
               friends.map(fr=><Friends friend={fr} handleClick = {handleClick} key={fr.name.email}></Friends>)
            }
        </div>
        </div>
            


        </div>
    );
};

export default Main;