import { Application } from 'express'
import express from 'express'
import cors from 'cors'
import globalErrorHandeler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', UserRoutes)

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandles Promise Rejection'))
// })

// global error handler
app.use(globalErrorHandeler)
export default app
