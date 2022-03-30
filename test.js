const axios = require('axios');

axios.get('http://localhost:5000/v1/map/')
    .then((res) => {
        console.log(res.data.data.locations);
    })
    .catch();