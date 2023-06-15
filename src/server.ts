import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorlogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected successfully')

    app.listen(config.port, () => {
      logger.info(`Application is listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('failed to connect server', err)
  }
}
bootstrap()
