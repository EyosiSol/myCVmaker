import PropTypes from "prop-types";
import "../styles/personalDetail.css";
import downarrow from "../assets/arrow.svg";
import { useState } from "react";
import uparrow from "../assets/upArrow.svg";

function PersonalDetail({ onSubmit }) {
 
  const [toggle,setToogle] = useState(false)  
  const dropIcon = toggle ? uparrow : downarrow;
  const handleDrop = () =>{
    setToogle(!toggle);
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };
  return (
    <>
      <div className="personal">
        <div className="title">
          <h4>Personal Detail </h4>
          <div className="drop" onClick={handleDrop}>
            <img src={dropIcon} alt="downarrow" />
          </div>
        </div>
        {toggle && <form onSubmit={handleSubmit}>
          <div className="names">
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" />
            </div>
            <div className="middleName">
              <label htmlFor="middleName">Middle Name</label>
              <input type="text" name="middleName" id="middleName" />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
          </div>

          <div className="headline">
            <label htmlFor="headline">Headline</label>
            <input type="text" name="headline" id="headline" />
          </div>

          <div className="address">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <div>
              <label htmlFor="postcode">PostCode</label>
              <input type="text" name="postcode" id="postcode" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
          </div>

          <div className="website">
            <label htmlFor="website">Website</label>
            <input type="url" name="website" id="website" />
          </div>

          <div className="linkedin">
            <label htmlFor="linkedin">Linkedin</label>
            <input type="url" name="linkedin" id="linkedin" />
          </div>

          <div className="github">
            <label htmlFor="github">Github</label>
            <input type="url" name="github" id="github" />
          </div>

          <button type="submit" id="Submit">Submit</button>
        </form>}
        
      </div>
    </>
  );
}
PersonalDetail.propTypes = {
  onSubmit: PropTypes.any,
};
export default PersonalDetail;
