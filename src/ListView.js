import React, {useState} from 'react';
import styled from 'styled-components';

import Card from './Card.js';

function ListView() {
    return (
        <div>
            <h2>Submissions</h2>
            <br></br>
            <div>
                <input type='text' onchange='searchChanged'></input>
            </div>

            <ul>
            {props.items.forEach(function(item) {
            return (
                <Card id={item.id} text={item.text} />)
            })} 
            </ul>
        </div>
    )
}

function searchChanged() {
    
}

export default ListView;