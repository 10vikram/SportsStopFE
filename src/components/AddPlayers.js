import React, { useState } from "react";

const AddPlayers = () => {
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');

    const handleNameChange = event => {
        setNameValue(event.target.value);
    };
    const handleAgeChange = event => {
        setAgeValue(event.target.value);
    };
    const person = {"name": nameValue,"age":ageValue};
    return (
        <div className="ui fixed paper">
            <div>
                <span style={{fontSize:"20px", fontFamily:"cursive", color:"whitesmoke", position: "absolute"}}>Name</span><br />
                <input id="nameId" value={nameValue} onChange={handleNameChange} type="text" style={{fontSize:"20px", color:"whitesmoke", position: "inherit", marginBottom:"10px", backgroundColor:"darkgray"}}/><br />
                <span style={{fontSize:"20px", fontFamily:"cursive", color:"whitesmoke", position:"inherit"}}>Age</span><br />
                <input id="ageId" value={ageValue} onChange={handleAgeChange} type="text" style={{fontSize:"20px", color:"whitesmoke", position: "inherit", marginBottom:"10px", backgroundColor:"darkgray"}}/><br />
                <button style={{fontFamily:"sans-serif"}} onClick={click}>Submit</button>
            </div>
        </div>
    )
}

export default AddPlayers;