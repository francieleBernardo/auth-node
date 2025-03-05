import { Router } from 'express'

export const Teste = Router()

Teste.get('/', (req, res) => {
  res.send('Hello World! teste')
})