import './styles/body.css'
import DropDown from "./components/Dropdown";
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
  return (
    <>
      <div className="bod">
        <div className="Left-Body">
          <div className="leftHeader">
            <DropDown name="Font Family (Aa)" value={fonts} def='Arial'/>
            <DropDown name="Font Size (TT)" value={size} def={12}/>
            <button style={{height:'50px'}}>Color</button>
          </div>
        </div>
        <div className="Right-Body">RIGHT BOD</div>
      </div>
    </>
  );
}

export default Body;
