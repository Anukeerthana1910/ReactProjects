import React from "react";
function compare1()
{
      const name1="Kabil";
      const name2="Kabil";
      const object1={name:"Kabil"};
      const object2={name:"Kabil"};
      if(name1==name2)
      console.log("True");
      else
      console.log("False");
    if(object1==object2)
    console.log("True");
    else
    console.log("False");

}
function App4()
{
    return(
        <div className="App">
            
            <button onClick={compare1}>CY1</button>
            

        </div>
    )
}
export default App4;