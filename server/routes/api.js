const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });
const dbName = 'db-exercises';

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {

    client.connect((err) => {
        console.log('connected');
        const db = client.db(dbName);
        client.close();
        console.log('connection closed');
    });


    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios.get(`${API}/posts`)
        .then(posts => {
            res.status(200).json(posts.data);
        })
        .catch(error => {
            res.status(500).send(error)
        });
});

module.exports = router;