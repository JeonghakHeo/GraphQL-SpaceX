import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema.js'
import cors from 'cors'
import path from 'path'

const app = express()

app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '/client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
