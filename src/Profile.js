// profile page

import React, {useState} from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
function submitComment(comment) {
    console.log(comment);
}
=======
import './Profile.css'

import {postData} from './Api';
import { Pane, TextInput, Button, Card } from 'evergreen-ui';
>>>>>>> 914ffdeff59c9f3790e9a9ab565b7a093e3f6b88

function Profile(props) {
    return (
        <div>
            <h2>{props.name}</h2>

            <ul>
                {(props.comments || []).map((comment, i) => {
                return (
                    <Card key={i}>
                        <h2>{props.comments.author}</h2>
                        <div>{comment}</div>
                    </Card>
                    )
                })}
            </ul>
            
            <Pane>
                <TextInput type='text' placeholder='Add comment'></TextInput>
                <Button onClick={() => submitComment()}>
                    Submit
                </Button>
            </Pane>
        
        </div>
    )
}

function submitComment(text, author) {
    postData(text, author);
}

export default Profile;