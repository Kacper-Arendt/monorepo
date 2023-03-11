import express from 'express';

// MIDDLEWARES
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from 'src/utils/errorHandler';

// ROUTES
import { routes } from 'src/routes';

export const createServer = () => {
	const app = express();

	app.all('*', function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'X-Requested-With');
		next();
	});

	app.use(cors());
	app.options('*', cors());
	app.disable('x-powered-by');
	app.use(morgan('dev'));
	app.use(helmet());
	app.use(express.urlencoded());
	app.use(express.json());

	app.use('/', routes);

	app.get('*', (req, res) => {
		res.status(404).send({ error: 'unknown endpoint' });
	});

	app.use(errorHandler);

	return app;
};
