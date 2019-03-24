import React, { useState } from 'react';
import styled from 'styled-components';

function Card(props) {

    
    const [timestamp, name, year] = props.item;

    return (
      <div>

        <p>{name}</p>
        <p>{timestamp}</p>
        <p>{year}</p>
      </div>
    );
  }

  function submitComment(text, author) {
      // POST to excel spreadsheet
  }

  export default Card;