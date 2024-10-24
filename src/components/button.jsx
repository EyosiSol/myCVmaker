import PropTypes from "prop-types";

function Button({ svg, name, classname,}) {
  const Styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: '0px 12px',
    backgroundColor: '#76ADFF',
    border: 'none',
    borderRadius: 12+'px',
    height: 60+'px',
    fontSize : 1.2 +'rem',
    fontWeight : '600'
  };

  return (
    <>
      <button className={classname} style={Styles}>
        <img src={svg} alt={name} />
        {name}
      </button>
    </>
  );
}
Button.propTypes = {
  name: PropTypes.string,
  svg: PropTypes.string,
  classname: PropTypes.string,
  widz: PropTypes.string,
  heit: PropTypes.string,
  fontsize: PropTypes.string,
  fontWeit: PropTypes.string

};
export default Button;
