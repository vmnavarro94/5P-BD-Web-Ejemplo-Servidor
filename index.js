const express = require('express')
const app = express()
app.use(express.json())

let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' },
  { id: 3, name: 'Smith' }
]

/*
 *
 (param1, param2) => {
    //your code here
    return
 }

function(param1, param2) {
  //your code here
  return
}
 *
 * */

//Ruta principal
app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.post('/users', (req, res) => {
  users.push(req.body)
  res.send('User added')
})

app.patch('/users/:id', (req, res) => {
  const { body } = req
  const { params } = req
  const { id } = params
  const { name } = body

  const user = users.find((user) => user.id == id)
  user.name = name

  res.send({ message: 'User updated', user })
})

app.delete('/users/:id', (req, res) => {
  const { params } = req
  const { id } = params

  const newUsers = users.filter((user) => user.id != id)
  users = newUsers

  res.send({ message: 'User deleted' })
})

app.listen(3010, () => {
  console.log('Listening on port 3010')
})
