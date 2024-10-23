import Button from "./components/button";
import DownloadIcon from "./assets/download.svg";
import "./styles/header.css";
function Header() {
  return (
    <div className="header-div">
      <Button svg={DownloadIcon} name="Download" classname='download'/>
    </div>
  );
}
export default Header;
