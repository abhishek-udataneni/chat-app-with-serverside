import React from 'react';
import './App.css';
import {Sidebar} from "./containers/Sidebar";
import {MessagesList} from "./containers/MessagesList";
import {AddMessage} from "./containers/AddMessage";
function App() {
  return (
    <div id="container">
      <Sidebar />
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
      Hello from the otherside
    </div>
  );
}

export default App;
