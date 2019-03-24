// profile page

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import './Profile.css'

import {Link} from 'react-router-dom'

import {fetchComments, postComment} from './Api';
import { Table, Pane, ThemeConsumere, TextInput, Button, Card } from 'evergreen-ui';

function Profile(props) {
    const item = props.history.location.state;
    const unique_id = item.uid;

    const submitComment = () => {
        const text = document.getElementById('newcomment').value;
        // a bit of validation
        if (text.trim().length < 1) {
            console.log("can't submit empty comment")
            return; // can't submit empty
        }

        document.getElementById('newcomment').value = ''; // clear
        const author = 'Current User' // TODO: login stuff
        postComment(unique_id, text, author)
        .then(() => refreshComments()); // refresh after post
    }

    const [comments, setComments] = useState([]);

    const refreshComments = () => {
        fetchComments().then(comments => {
            console.log('updated comments: ', comments);
            setComments(comments[unique_id] || []);
      })
    };

    // update once in beginning
    useEffect(refreshComments, []);

    return (
        <div className='title-container'>
            <Pane id="top-container">
            <div className='button'>
                <Link to='/'>
                    <Button type='button'>
                        Back
                    </Button>
                </Link>
            </div>
                <h2>{item['Name']}</h2>
                <h3>{item['Year']}</h3>
            </Pane>
            <div className='profile-display'>
            <Pane id="mid-container">
                <div className='table' id="left-component">
                    <table className='table-proper'>
                    {(Object.keys(item) || []).map((key, i) => {
                    return (
                        <tr key={i}>
                        <td className='table-key'>{key}</td> 
                        <td>{item[key]}</td>
                        </tr>
                        )
                    })}
                    </table>
                </div>
                <div id="right-component">
                </div>
            </Pane>
            <div className='chat-box'>
            <Pane className='bottom-container'>
                <ul>
                    {comments.map((comment, i) => {
                        return (
                            <Card key={i} margin={30}>
                                <div>{comment.author}</div>
                                <div>{comment.text}</div>
                                <div>{comment.timestamp}</div>
                            </Card>
                            )
                    })}
                </ul>
                </Pane>
                
                <div className='comment'>
                <Pane>
                    <TextInput id='newcomment' type='text' placeholder='Add comment'></TextInput>
                    <Button appearance="primary" intent="success" onClick={submitComment}>
                        Submit
                    </Button>
                </Pane>
                </div>
    
                
            
            </div>
            </div>
        
        </div>
    )
}

export default Profile;