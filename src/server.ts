import express from 'express';
import hello from 'lib';

const app = express();

app.use(express.static('dist/static'));

app.get('/hello/:name', (req, res) => {
    const message = hello({name: req.params.name});

    res.send(message);
});

app.listen(4000, () => { 
    console.log('listening on *:4k');
});