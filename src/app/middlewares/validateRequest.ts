import { AnyObject } from 'mongoose'
import { NextFunction, Request, Response } from 'express'

const validateRequest =
  (schema: AnyObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      })
      return next()
    } catch (error) {
      next(error)
    }
  }

export default validateRequest
