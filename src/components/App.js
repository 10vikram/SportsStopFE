import React from 'react';
import './App.css';

import Header from "./header";
import MenuBar from './MenuBar';
import AddPlayers from './AddPlayers';

function App(){
    
    return (
        <div className='ui container Login-component'> 
            <Header />
            <MenuBar />
            <AddPlayers />
        </div>
    );
}

export default App;