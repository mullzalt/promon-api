import express, { Application, ErrorRequestHandler } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import compression from 'compression'
import { config as dotenv } from 'dotenv'

import HttpExceptions from './exceptions/HttpExceptions'
import router from './routes'


class App {

    public app: Application

    constructor() {
        this.app = express()
        this.plugins()
        dotenv()
        this.routes()
        this.exception()
    }

    protected plugins(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(compression())
        this.app.use(helmet())
        this.app.use(cors())
    }

    protected routes(): void {
        this.app.use('/v1', router)
    }

    protected exception(): void {
        this.app.use(HttpExceptions)
    }
}

export default new App().app