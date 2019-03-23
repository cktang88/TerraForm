import React, { useState } from 'react';
import styled from 'styled-components';

function Card() {
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);
    
    return (
      <div>
        <p>id {props.id}</p>
        <p>{props.text}</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  export default Card;