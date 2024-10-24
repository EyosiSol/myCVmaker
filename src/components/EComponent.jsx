import PropTypes from "prop-types";
import downarrow from "../assets/arrow.svg";
import uparrow from "../assets/upArrow.svg";
import '../styles/EComponent.css'
import { useState } from "react";
import add from '../assets/add.svg'

function EComponent({ type, fill0, fill1, fill2 }) {

    const[drop,setDrop] = useState(false)

    const handleDrop = () =>{
        setDrop(!drop)
    }
const icon = drop? uparrow : downarrow;
  return (
    <>
      <div className="Ecomponent">
        <div className="title">
          <h4>{type}</h4>
          <div className="drop" onClick={handleDrop}>
            <img src={icon} alt="downarrow" />
          </div>
        </div>
        {drop && <div className="btndiv"><button id="Add"><img src={add} alt="add"/>Add {type}</button></div>}
        
      </div>
    </>
  );
}

EComponent.propTypes = {
    type : PropTypes.string,
    fill0 : PropTypes.string,
    fill1 : PropTypes.string,
    fill2 : PropTypes.string,

}


export default EComponent;
