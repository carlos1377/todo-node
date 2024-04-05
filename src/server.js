import express from 'express'
// import { Router } from 'express'
import { Task } from './class/task.js'

const app = express()
app.use(express.json())

app.post(('/task'), async (req, res) => {
    const data = req.body

    const {title, description, priority, done} = data

    const task = new Task(title, description, priority, done)

    const task_created = await task.add_task()

    res.status(201).send(task_created);
})

app.get(('/task/:id'), async (req, res) => {
    const id = parseInt(req.params.id)

    const task = await Task.get_task(id)

    if (task == null){
        res.status(404).send({ message: 'not found'})
        return
    }
    res.status(200).send(task);
})

app.get(('/task/'), async (req, res) => {
    const tasks = await Task.get_all_tasks()

    res.status(200).send(tasks);
})

app.listen(3333, () => {
    console.log('🚀 Server is running on http://localhost:3333 !')
})

