import React, {useState} from 'react';
import styled from 'styled-components';

import Card from './Card.js';

function ListView(props) {
    console.log(props);
    return (
        <div>
            <h2>Submissions</h2>
            <br></br>
            <div>
                <input type='text' onChange={searchChanged}></input>
            </div>

            <ul>
            {(props.items || []).map(i => {
                return (
                    <Card item={i} key={i[0]}/>)
                })}
            </ul>
        </div>
    )
}

function searchChanged() {

}

export default ListView;