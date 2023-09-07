import React from 'react';
import './App.css';
import Filters from './Components/Filters/filters';
import Header from './Components/Header/header';
import TicketList from './Components/TicketList/ticketList';




function App() {

  return (
    <>
      <Header />
      <div className="content" style={{"display":"flex"}}>
        <Filters />
        <TicketList />
      </div>
    </>
  );
}

export default App;
