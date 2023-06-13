import { Application } from 'express'
import express from 'express'
import cors from 'cors'
import globalErrorHandeler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'

const app: Application = express()

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1/', routes)

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandles Promise Rejection'))
// })

// global error handler
app.use(globalErrorHandeler)
export default app
