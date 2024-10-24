import Button from "./components/button";
import DownloadIcon from "./assets/download.svg";
import "./styles/header.css";
function Header() {
  return (
    <div className="header-div">
      <Button svg={DownloadIcon} name="Download PDF" classname='download' widz='120' heit='60' fontsize='1.2'/>
    </div>
  );
}
export default Header;
