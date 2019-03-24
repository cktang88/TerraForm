import React, {useState} from 'react';
import styled from 'styled-components';

import Card from './Card.js';

function ListView(props) {

    const items = props.values;

    return (
        <div>
            <h2>Submissions</h2>
            <br></br>
            <div>
                <input type='text' onChange={searchChanged}></input>
            </div>

            <ul>
            {items.map(item => {
                return (
                    <Card {...item} />)
                })}
            </ul>
        </div>
    )
}

function searchChanged() {

}

export default ListView;