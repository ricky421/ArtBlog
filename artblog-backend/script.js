const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

app.use(cors());

const dbAccess = 'mongodb+srv://artist:artist@artblogtest.4edx1.mongodb.net/artblog?retryWrites=true&w=majority';
mongoose.connect(dbAccess, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => 
    app.listen(8000, () => {
        console.log("Listening on port 8000."); 
    }))
.catch((err) => console.log(err));

//ROUTES
app.get('/', (req, res) => {
    res.sendFile('./display/index.html', { root: __dirname });
});

app.post('/add', jsonParser, (req,res) => {
    //console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
    .then(result => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    });
});

app.get('/data', (req, res) => {
    data = { "blogs" : []};
    var c = 1;

    Blog.find()
    .then(result => {
        result.forEach(blog => {
            data.blogs.push({
                title: blog.title,
                url: blog.link,
                id: c,
            });
            c += 1;
        });
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    });
});