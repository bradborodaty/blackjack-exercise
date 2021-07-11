import axios from 'axios';

const getScore = () => {
    return axios.get('/api/score').then(res => {
        return res.data;
    });
};

const updateScore = (winner) => {
    return axios.post('/api/score', {
        result: winner
    }).then(res => {
        console.log(res);
        return res.data;
    });
}

export { getScore, updateScore };
