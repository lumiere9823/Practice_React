import React from 'react';

export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} className="header-logo" alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}
