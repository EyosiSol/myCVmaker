import downarrow from "../assets/arrow.svg";
import uparrow from "../assets/upArrow.svg";
import { useState } from "react";
import PropTypes from "prop-types";

function DropDown({ name,value, def }) {
  const [mycomponent, setformycomponent] = useState(def);
  const [drop, setDrop] = useState(false);
  const [isTypeHovered, setTypeHovered] = useState(false);
  const [isListHovered, setListHovered] = useState(null);

  const Style = {
    display: "flex",
    alignItems: "center",
    fontSize: "1.2rem",
    padding: "0px 3px",
    border: "none",
    cursor: "pointer",
    background: isTypeHovered ? "#49D3AE" : "#5FF6CE",
  };
  
  // const liStyle = {
  //   // border: "1px solid black",
  //   padding: "3px",
  //   cursor: "pointer",
  //   width: "70%",
  //   position: "relative",
  //   right: "-30%",
  //   listStyleType: "none",
  //   marginBottom: "3px",
  //   background: isListHovered === index ? "#49D3AE" : "#5FF6CE",
  // };
  const ulStyle = {
    marginTop: "5px",
  };
  const valItems = value.map((value, index) => (
    <li
      key={index}
      onClick={() => handleComponent(value)}
      style={{
        padding: "3px",
        cursor: "pointer",
        width: "70%",
        listStyleType: "none",
        marginTop: "3px",
        background: isListHovered === index ? "#49D3AE" : "#5FF6CE",
        border:'1px solid black'
      }}
      onMouseEnter={() => setListHovered(true)}
      onMouseLeave={() => setListHovered(false)}
    >
      {value}
    </li>
  ));

  const imgStyle = {
    marginLeft: "4px",
  };

  const dropIcon = drop ? uparrow : downarrow;
  const handleComponent = (changeVal) => {
    setformycomponent(changeVal);
    setDrop(!drop);
  };
  const handlesetDrop = () => {
    setDrop(!drop);
  };

  return (
    <>
      {/* <p>This is the Font Family: {mycomponent}</p> */}
      <div className="dropcomponent">
        <button
          onClick={handlesetDrop}
          style={Style}
          onMouseEnter={() => setTypeHovered(true)}
          onMouseLeave={() => setTypeHovered(false)}
        >
          {name}<img style={imgStyle} src={dropIcon} alt="" />{": "}{mycomponent}
        </button>
        {drop && <ul style={ulStyle}>{valItems}</ul>}
      </div>
    </>
  );
}

DropDown.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.array,
  def: PropTypes.any,
};
export default DropDown;
