import React from "react";

class menuBar extends React.Component {
    render() {
        function SignUp(){
            fetch('http://localhost:3000/signUp',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(true)
            }).then(() => 
            console.log('SignUp button clicked!!'));
        }
        function Games(){
            fetch('http://localhost:3000/games',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(true)
            }).then(() => 
            console.log('Games button clicked!!'));
        }
        function Sell(){
            fetch('http://localhost:3000/sell',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(true)
            }).then(() => 
            console.log('Sell button clicked!!'));
        }
        function Contact(){
            fetch('http://localhost:3000/contact',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(true)
            }).then(() => 
            console.log('Contact button clicked!!'));
        }
        function About(){
            fetch('http://localhost:3000/about',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(true)
            }).then(() => 
            console.log('About button clicked!!'));
        }
        return(
            <div className="ui" style={{paddingTop:"50px"}}> 
                <span onClick={SignUp} style={{color:"black",backgroundColor: "wheat",width:"225px", height:"25px", textAlign: "center", display:"inline-block", cursor:"pointer"}}>Sign Up</span>
                <span onClick={Games} style={{backgroundColor: "wheat",color:"black", width:"225px", height:"25px", textAlign: "center",display:"inline-block", cursor:"pointer"}}>Games</span>
                <span onClick={Sell} style={{backgroundColor: "wheat",color:"black", width:"225px", height:"25px", textAlign: "center",display:"inline-block", cursor:"pointer"}}>Sell</span>
                <span onClick={Contact} style={{backgroundColor: "wheat", color:"black", width:"225px", height:"25px", textAlign: "center",display:"inline-block", cursor:"pointer"}}>Contact</span>
                <span onClick={About} style={{color:"black", backgroundColor: "wheat", width:"225px", height:"25px", textAlign: "center",display:"inline-block", cursor:"pointer"}}>About</span>
            </div>
        );
    }
}

export default menuBar;