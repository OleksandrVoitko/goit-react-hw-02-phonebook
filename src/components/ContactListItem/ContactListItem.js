import React from "react";

const ContactListItem = ({ id, name, number }) => {
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
};

export default ContactListItem;
