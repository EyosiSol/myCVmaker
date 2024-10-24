import './styles/body.css'
import DropDown from "./components/Dropdown";
import DisplayPersonal from './components/display';
import PersonalDetail from './components/personalDetail';
import { useState } from 'react';

const fonts = [
  "Roboto",
  "Montserrat",
  "Poppins",
  "Lora",
  "Playfair Display",
  "Inter",
  "Raleway",
  "Merriweather",
  "Open Sans",
  "Ubuntu",
  "Arial"
];
const size = [8, 10, 12, 14, 16, 18, 20];


function Body() {

  const [formData, setFormData] = useState(null)

  const handleFormSubmit = (data) => {
    // Update the state with the form data
    setFormData(data);
  };

  return (
    <>
      <div className="bod">
        <div className="Left-Body">
          <div className="leftHeader">
            <DropDown name="Font Family (Aa)" value={fonts} def='Arial'/>
            <DropDown name="Font Size (TT)" value={size} def={12}/>
            <button style={{height:'50px'}}>Color</button>
          </div>
          <PersonalDetail onSubmit={handleFormSubmit}/>
        </div>
        <div className="Right-Body">
          <h1>MY Paper</h1>
          {formData && <DisplayPersonal data={formData}/>}
        </div>
      </div>
    </>
  );
}

export default Body;
