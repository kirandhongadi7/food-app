import { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";




const App = () => {
  
  return(
    <> 
    <div className="bg-[#1E1B18]">
      <Header/>
      <Body />
    </div>

    </>
  )
  
};




// Get the root element
const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Render the app
root.render(<App />);
