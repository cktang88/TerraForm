import React, { useState } from 'react';
import styled from 'styled-components';

function Card() {
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);
    
    return (
      <div>
        <p>id {props.id}</p>
        <p>{props.text}</p>


        <ul>
        {this.props.comments.forEach(comment => {
           return (
            <div>
                <h2>{this.props.comments.author}</h2>
                <div>{comment}</div>
            </div>
            )
        })}
        </ul>

        <input type='text' placeholder='comment'></input>
        <button onClick={() => setData(count + 1)}>
          Submit
        </button>
      </div>
    );
  }

  function submitComment(text, author) {
      // POST to excel spreadsheet
  }

  export default Card;