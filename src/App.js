import React, { Component, useContext, useEffect } from "react";

import "./App.css";
import "./assets/css/compiled-tailwind.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


//starter kit
import "@fortawesome/fontawesome-free/css/all.min.css";

//landing template
import Landing from "./views/Landing.js";

function App() {
  
 
  return (
    <Router>
     <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
    <link href="https://unpkg.com/@tailwindcss/custom-forms/dist/custom-forms.min.css" rel="stylesheet" />
      <Route path="/" component={Landing} />
   

    
    </Router>
  );
}

export default App;
