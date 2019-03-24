// profile page

import React, {useState} from 'react';
import styled from 'styled-components';

import './Profile.css'

import {postData} from './Api';
import { Pane, TextInput, Button, Card } from 'evergreen-ui';

function Profile(props) {
    const item = props.history.location.state;
    console.log(item);
    return (
        <div>
            <Pane id="top-container">
                <h2>{item.name}</h2>
                <h3>{item.year}</h3>
            </Pane>
            <Pane id="mid-container">
                <div id="left-component">
                    <ul>
                    {(item.pref_roles.split(',') || []).map((role, i) => {
                    return (
                        <li>{role}</li>
                        )
                    })}
                    </ul>
                </div>
                <div id="right-component">
                </div>
            </Pane>
            <Pane id="bottom-container">
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
            </Pane>
        
        </div>
    )
}

function submitComment(text, author) {
    postData(text, author);
}

export default Profile;