import express from 'express';

const app = express();

app.disable('x-powered-by');

const PORT = process.env.PORT ?? 1234;

app.get('/', (req, res) => {
    res.status(200).send('<h1>Eso tilín</h1>');
});

app.listen(PORT, () => {
    console.log(`Server listening on port... ${PORT}`);
});