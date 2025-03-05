import express from 'express'
import { Teste } from './router/test'

const app = express()
const port = 3000

app.use('/teste', Teste)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})