import React, { useState, useEffect } from "react";

import './App.css';


import Eingabe from './components/Eingabe'
import Liste   from './components/Liste'

function showData(data){
  console.log(data)
}



function App() {
  const [serverData, setServerData] = useState(0);
  const [formData, setFormData] = useState(0);

  const[sayApp, addSayApp] = React.useState([])

  const sendToList = (newValue) =>{
    const newList = [newValue,...sayApp]

    addSayApp(newList)
  }
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3002/send-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({message:"ich komme von react"})
      });
      const data = await res.json()
      setServerData(data.message)
      showData(data)
    }

    fetchData();
  });
  return (
    <>
    <Eingabe titel="Send Data" sendToList={sendToList}/>
    <Liste sayApp={sayApp}/>
    
    <div className="App">
    <header className="App-header">
      
      <p>
        {serverData}
      </p>
      <form>
        <input type="text" onChange={setFormData} />
      </form>
    </header>
  </div>
  </>
  );
}

export default App;


// const [serverData,setServerData] =useState(0)
//   const [formData, setFormData]
//   useEffect(()=>{
//     async function fetchData(){
//       const res =await fetch("http://localhost:3000")
//       const data = await res.json()
//       setServerData(data.message)
//       showData(data)
//     }
//     fetchData();
//   })