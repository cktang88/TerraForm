import React, {useState} from 'react';
import styled from 'styled-components';

import Card from './Card.js';

function ListView(props) {

    console.log(props);
    const {items = []} = props;
    console.log(items, typeof items);
    return (
        <div>
            <h2>Submissions</h2>
            <br></br>
            <div>
                <input type='text' onchange='searchChanged'></input>
            </div>

            <ul>
            {items.map(item => {
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