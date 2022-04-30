import express from 'express';

import get from './get.js'

let user = express.Router();

user.get('/:id', get);

export default user;