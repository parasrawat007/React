import React from 'react';

const seasonConfig={
    Summer:{
        text:"Let's hit the beach!",
        iconName:'sun'
    },
    Winter:{
        text:"Burr, its chilly",
        iconName:'snowflake'
    }
};
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    }
    else {
        return lat < 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text,iconName}=seasonConfig[season];//text iconName

    return (
        <div>
            <i className={`icon ${iconName}`}></i>
            <h1>{text}</h1>
            <i className={`icon ${iconName}`}></i>
        </div>
    );
}

export default SeasonDisplay;