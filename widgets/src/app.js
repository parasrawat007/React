import React from 'react';
import Accordion from './components/Accordions';

const items=[
    {
        title:'What is React?',
        content:'React is a Frontend Js Farmework'
    },
    {
        title:'Why use React?',
        content:'React is a favourite JS libaray among engineers'
    },
    {
        title:'How do you use React?',
        content:'We use React by creating component'
    }
];

export default ()=>{
    return <Accordion items={items}/>
}