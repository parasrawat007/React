import React, { useState } from 'react';
import Accordion from './components/Accordions';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a Frontend Js Farmework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS libaray among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'We use React by creating component'
    }
];
const options = [
    {
        label: "The color Red",
        value: 'red'
    },
    {
        label: "The color Green",
        value: 'green'
    },
    {
        label: "The color Blue",
        value: 'Blue'
    },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    // return <Accordion items={items} />
    // return <Search/>;
    return (
        <div>
            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>
    );
}