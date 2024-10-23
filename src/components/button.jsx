import PropTypes from "prop-types";

function Button({ svg, name, classname }) {
  const Styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: '0px 12px',
    backgroundColor: '#76ADFF',
    border: 'none',
    borderRadius: 12+'px',
    height: 60+'px',
  };
  return (
    <>
      <button className={classname} style={Styles}>
        <img src={svg} alt={name} />
        <h4>{name}</h4>
      </button>
    </>
  );
}
Button.propTypes = {
  name: PropTypes.string,
  svg: PropTypes.string,
  classname: PropTypes.string,
};
export default Button;
