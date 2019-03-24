// profile page

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import './Profile.css'

import {Link} from 'react-router-dom'

import {fetchComments, postComment} from './Api';
import { Table, Pane, TextInput, Button, Card } from 'evergreen-ui';


function Profile(props) {
    const {item, name, dispElems} = props.history.location.state;
    const unique_id = item.uid;

    const submitComment = () => {
        const text = document.getElementById('newcomment').value;
        // a bit of validation
        if (text.trim().length < 1) {
            console.log("can't submit empty comment")
            return; // can't submit empty
        }

        document.getElementById('newcomment').value = ''; // clear
        const author = window.person || 'Guest' // TODO: login stuff
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
            <h2>{name}</h2>
            <div>
            {dispElems.map((elem, index) => {
                return (
                    <React.Fragment key={index}>
                        {index === 0 ? null : <h3>•</h3>}
                        <h3 >{elem}</h3>
                    </React.Fragment>
                )})
            }</div>
            </Pane>
            <div className='profile-display'>
                <div className='table' id="left-component">
                    <table className='table-proper'>
                    {(Object.keys(item) || []).map((key, i) => {
                    return (
                        <tr key={i}>
                        <td className='table-key'>{key}</td> 
                        <td className='table-val'>{item[key]}</td>
                        </tr>
                        )
                    })}
                    </table>
                </div>
            <div className='chat-box'>
            <Pane className='bottom-container'>
                <ul>
                    {comments.map((comment, i) => {
                        return (
                            <li>
                            <Card key={i} margin={30}>
                            <div className="comment">
                                <span className="comment-name">{comment.author}</span> {/*<span className="comment-date">{comment.timestamp.split(',')[0]}</span>*/} - <span className="comment-text">{comment.text}</span> 
                                </div>
                            </Card>
                            </li>
                            )
                    })}
                </ul>
                </Pane>
                
                <div className='comment-box'>
                    <input id='newcomment' type='text' placeholder='Add comment'></input>
                    <button id="submit-btn" appearance="primary" intent="success" onClick={submitComment}>
                        Submit
                    </button>
                </div>
    
                
            
            </div>
            </div>
        
        </div>
    )
}

export default Profile;