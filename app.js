 import React from "react";
 import ReactDOM from "react-dom/client";

// const parent=React.createElement("div", {id:"parent"},
//     React.createElement("div", {id:"child"},
//     React.createElement("h1", {},"Welcome to react application🌈 ")));
// console.log(parent);
//const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

 //React Element
 const Handling = (
 <h1>Welcome to react application🌈 

 </h1>);


//React component
const HeadingComponent=() =>(
    
   <div  id="container">
    {Handling}
     <h1 className="abc">Good morning!</h1>

    </div>
);

root.render(<HeadingComponent />);
//root.render(handling);