import React, {useState} from 'react';
import styled from 'styled-components';

import Item from './Item.js';
import './ListView.css'

import {SearchInput} from 'evergreen-ui';

import jwtDecode from 'jwt-decode';

function ListView(props) {
    const orig_items = props.items;
    const [items, setItems] = useState(props.items);

    const id_token = window.location.href.split('id_token=')[1].split('&')[0]; // hacky way to get url param

    const person = jwtDecode(id_token);
    window.person = person.name || person.email; // global state, should prob use Context API

    // everything search
    function searchChanged(query) {
        query = query.trim().toLowerCase();
        console.log(query);
        setItems(orig_items.filter(e => {
            // console.log(e['Name'], query, JSON.stringify(e).includes(query));
            return JSON.stringify(e).toLowerCase().includes(query)
        }));
    }

    return (
        <div className='background'>
            <h2>Submissions</h2>
            <br></br>
            <div>
                <SearchInput id='searchbar' placeholder='Search' type='text' onChange={(e) => searchChanged(e.target.value)}></SearchInput >
            </div>

            <div className='list-view-wrapper'>
            {(items || []).map((elem, index) => {
                return (
                    <Item item={elem} uid={index} key={index}/>)
                })}
            </div>
        </div>
    )
}

export default ListView;