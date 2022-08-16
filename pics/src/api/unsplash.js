import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID uwXGwHcYLjt_RvqfuiG2W_Uuw8O-R_9Z5h1TwcHUArU'
    }
});