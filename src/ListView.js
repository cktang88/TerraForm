import React, {useState} from 'react';
import styled from 'styled-components';

import Card from './Card.js';

function ListView() {
    return (
        <ul>
        {this.props.items.forEach(function(item) {

           return (
              <Card id={item.id} text={item.text} />)
        })} 
        </ul>
    )
}

export default ListView;