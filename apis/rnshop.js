import axios from 'axios';

export default axios.create({
    baseURL: 'https://reactn-shop.firebaseio.com/'
});