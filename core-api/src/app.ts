import 'reflect-metadata';
import DatabaseConfig from './config/database.config';
import * as Express from 'express';
import * as bodyParser from 'body-parser';

class Core {
    public app: Express.Application;
    public PORT = '8080';

    constructor() {
        this.app = Express();
        this._config();
    }

    public async start() {
        console.log(`Core API started.`);

        this.app.listen(this.PORT, () => {
            console.log(`Server listening in http://localhost:${this.PORT}`);
        });
    }

    private async _config(): Promise<void> {
        // Connecting to database
        await DatabaseConfig.connect();

        // Allowing body parser JSON
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

new Core().start();