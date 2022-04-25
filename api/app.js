import express from 'express';
import path from 'path';

import routes from './routes/index.js';

const app = express();
const port = 3000;

app.use('/', routes);
app.listen(port);

console.log(`Api started on port ${port}`);