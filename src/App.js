import React, {useState} from 'react';
import Item from './Item.js';
import enter from './img/enter.png';
import './App.css';


function App() {

  const [itemName,setName]=useState(0);
  
  const textValue=()=>{
    setName(document.getElementById('textField').value);
  }

  const add=()=>{
    var area= document.querySelector('.todoList')
    var element=document.createElementNS("#","Item");
    area.appendChild(element);
    console.log(element);
    var a = document.createAttributeNS("#","Name");
    a.value = itemName;
    element.setAttributeNode(a);
  }


  // const dataList=[
  //   {
  //     Name:itemName,
  //     key:0,
  //   },
  //   {
  //   Name:"Rohan",
  //   key:1,
  //   },
  //   {
  //     Name:"Rakesh",
  //     key:2,
  //   },  
  // ]
  return (
    <div className="App">
      <p className="heading">This is todo project</p>
      <input id="textField" 
              type="text" 
              placeholder="Enter Item" 
              onChange={()=>textValue()}
              />
      <img id="add" src={enter} alt ="Add" onClick={()=>{add()}}/>
      <div className="todoList">

      <Item Name={itemName} Key='0' key='0'/>

        {/* {
          dataList.map((data)=>
          {
            return(
              <Item Name={data.Name} Key={data.key} key={data.key}/>
            )
          })
        } */}
        
      </div>
    </div>
  );
}


export default App;
