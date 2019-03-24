import React, { useState } from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

import './Item.css'

import { Button, Card } from 'evergreen-ui';

function Item(props) {
    
    const [timestamp, name, year] = props.item;

    const unique_id = props.uid;

    return (
      
      <Card className = "wrapper"
        elevation={2}
        padding='20px'
        margin='20px'
        background="tint2"
      >
        <div className='name'>{name}</div>
            <div>{timestamp}</div>
            <div>{year}</div>
            <span className='btnlink'>
                <Link to={{
                  pathname: `/user/${unique_id}`,
                  state: {name}
                }}>
                    <Button type='button'>
                        View Profile
                    </Button>
                </Link>
            </span>
      </Card>

    );
  }

  export default Item;