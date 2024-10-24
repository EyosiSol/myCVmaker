import PropTypes from "prop-types";
function DisplayPersonal({ data }) {
  return (
    <div>
      <h2>Form Data</h2>
      <p>
        <strong>First Name:</strong> {data.firstName}
      </p>
      <p>
        <strong>Middle Name:</strong> {data.middleName}
      </p>
      <p>
        <strong>Last Name:</strong> {data.lastName}
      </p>
      <p>
        <strong>Headline:</strong> {data.headline}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
      <p>
        <strong>PostCode:</strong> {data.postcode}
      </p>
      <p>
        <strong>City:</strong> {data.city}
      </p>
      <p>
        <strong>Website:</strong> {data.website}
      </p>
      <p>
        <strong>LinkedIn:</strong> {data.linkedin}
      </p>
      <p>
        <strong>GitHub:</strong> {data.github}
      </p>
    </div>
  );
}
DisplayPersonal.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    website: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default DisplayPersonal;
