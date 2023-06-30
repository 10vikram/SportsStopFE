import React from "react";

class equipment extends React.Component {
    render() {
        return(
            <div className="ui Login-component" style={{backgroundColor:"auto", backgroundopacity:"0.1"}}> 
                <form className="ui form"><br /> <br />
                    <div className="field" style={{position:"center"}}>
                        <label style={{color:"whitesmoke"}}>Equipment Name</label>
                        <input type="text" name="name" placeholder="Equipment Name"style={{width:"20%"}}></input>
                    </div>
                    <div className="field" style={{position:"center"}}>
                        <label style={{color:"whitesmoke"}}>Picture</label>
                        <img src="https://www.rookieroad.com/img/sports/sports-equipment-and-gear.png" height={200} width={200}></img>
                    </div>
                    <div style={{position:"center"}}>
                        <button className="ui button blue">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default equipment;