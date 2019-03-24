// profile page

import React, {useState} from 'react';
import styled from 'styled-components';

function Profile(props) {
    return (
        <div>
            <h2>{props.name}</h2>

            <ul>
            {(props.comments || []).map((comment, i) => {
            return (
                <div key={i}>
                    <h2>{props.comments.author}</h2>
                    <div>{comment}</div>
                </div>
                )
            })}
            </ul>

            <input type='text' placeholder='comment'></input>
            <button onClick={submitComment}>
            Submit
            </button>
        
        </div>
    )
}
export default Profile;