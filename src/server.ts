import app from './app';

app.listen(process.env.PORT || 3333);

console.info(`> listening on port ${process.env.PORT || 3333}`);
