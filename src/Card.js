import React, { useState } from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

function Card(props) {
    
    const [timestamp, name, year] = props.item;

    const unique_id = props.uid;

    return (
      <div class='card'>

        <div class='name'>{name}</div>
        <div>
            <span class='time'>{timestamp}</span>        
            <span class='year'>{year}</span>
            <span class='btnlink'>
                <Link to={`/user:${unique_id}`}>
                    <button type='button'>
                        View Profile
                    </button>
                </Link>
            </span>
        </div>
      </div>
    );
  }

  function submitComment(text, author) {
      // POST to excel spreadsheet
  }

  export default Card;