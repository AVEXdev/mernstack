import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import middlewares from './src/middlewares/Middlewares.js'
import Config from './config/Config.js'
import UserRoutes from './src/routes/User.routes.js'
//import UserModel from './src/models/User.model.js'

dotenv.config()
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
	res.send('Pancakes!')
})

/* // test post rest api
app.get('/user', (req, res) => {
	res.send(UserModel)
}) */

UserRoutes.routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Config.connectToDatabase()
Config.connectToPort(app)
