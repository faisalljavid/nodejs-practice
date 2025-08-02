import express from 'express'
import { getProducts, getGenres } from '../controllers/productControllers.js'

export const productsRouter = express.Router()

productsRouter.get('/genres', getGenres)
productsRouter.get('/', getProducts)
