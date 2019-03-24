import React, { useState } from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

import './Item.css'

import { Button, Card } from 'evergreen-ui';

function Item(props) {
    
    const [timestamp, name, year] = props.item;

    const unique_id = props.uid;

    return (
      <Card
        elevation={2}
        padding='20px'
        margin='20px'
        background="tint2"
      >
        <div className='name'>{name}</div>
        <span>
            <span className='time'>{timestamp}</span>        
            <span className='year'>{year}</span>
            <span className='btnlink'>
                <Link to={`/user:${unique_id}`}>
                    <Button type='button'>
                        View Profile
                    </Button>
                </Link>
            </span>
        </span>
      </Card>
    );
  }

  export default Item;