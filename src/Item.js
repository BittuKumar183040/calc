import './App.css';
import logo from './img/del.png';
const Item=(props)=>{
   
    return(
        <div className="item">
            <p className="itemName">{props.Name}</p>
            <div>
                <input id="checkbox" type="checkbox"/>
                <img id="delete" src={logo} alt="X"/>
            </div>
            
        </div>
    );
    
}


export default Item;