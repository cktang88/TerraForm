// profile page

import React, {useState} from 'react';
import styled from 'styled-components';

import './Profile.css'

import {Link} from 'react-router-dom'

import {postComment} from './Api';
import { Table, Pane, TextInput, Button, Card } from 'evergreen-ui';

function Profile(props) {
    const item = props.history.location.state;
    console.log(item);
    return (
        <div>
            <div>
                <Link to='/'>
                    <Button type='button'>
                        Back
                    </Button>
                </Link>
            </div>
            <Pane id="top-container">
                <h2>{item['Name']}</h2>
                <h3>{item['Year']}</h3>
            </Pane>
            <Pane id="mid-container">
                <div id="left-component">
                    <Table>
                    <Table.Body>
                    {(Object.keys(item) || []).map((key, i) => {
                    return (
                        <Table.Row key={i}>
                        <Table.TextCell>{key}</Table.TextCell> 
                        
                        <Table.TextCell>{item[key]}</Table.TextCell>
                        </Table.Row>
                        )
                    })}
                    </Table.Body>
                    </Table>
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

function submitComment(id, text, author) {
    postComment(id, text, author);
}

export default Profile;