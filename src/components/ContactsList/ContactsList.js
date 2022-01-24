import React from "react";
import PropTypes from "prop-types";

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;