import express from 'express';
import bodyParser from 'body-parser';
import user from './users/index.js'

const routes = express.Router();

//config BodyParser
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

//simple logging system
routes.use((req, res, next) => {
	console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
	next();
})

routes.use('/user', user)

export default routes;