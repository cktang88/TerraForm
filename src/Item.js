import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './Item.css'
import { Button, Card } from 'evergreen-ui';
import {LIST_DISPLAY_COLS, USER_NAME_COLS} from '../config/config.js';

function Item(props) {
    const {item} = props;

    const unique_id = props.uid;
    item.uid = props.uid;

    const dispElems = LIST_DISPLAY_COLS.map(e => item[Object.keys(item)[e]]) || [];
    console.log('DISP: ', dispElems);

    let name = '';
    USER_NAME_COLS.forEach(e => name += ' ' + item[Object.keys(item)[e]]);
    console.log('NAME: ', name)

    return (
      
      <Card className = "wrapper"
        elevation={2}
        padding='20px'
        margin='20px'
        // background="rgb(39,186,116)"
      >
        <div className='name'>{name}</div>
            <div>
            {dispElems.map((elem, index) => {
                return (
                    <div key={index}>{elem}</div>
                )})
            }
            </div>
            <span className='btnlink'>
                <Link to={{
                  pathname: `/user/${unique_id}`,
                  // TODO: Pass the state fields dynamically (not specifically tailored to this app)
                  state: {item, name, dispElems}
                }}>
                    <button className="view-profile" appearance="primary">
                        View Profile
                    </button>
                </Link>
            </span>
      </Card>

    );
  }

  export default Item;