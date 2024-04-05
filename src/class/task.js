import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


export class Task {
    constructor(title, description, priority, done){
        this.title = title
        this.description = description
        this.priority = priority
        this.done = done
    }

    async add_task(){
        const task_created = await prisma.task.create({
            data: {
                title: this.title,
                description: this.description,
                priority: this.priority,
                done: this.done
            }
        })
        
        return task_created
    }
    
    static async get_task(id = null){
        const one_task = await prisma.task.findFirst({
            where:{
                id: id
            },
        })
        return one_task
    }

    static async get_all_tasks(){
        const many_tasks = await prisma.task.findMany();

        return many_tasks;
    }

    async update_task(task){
        
    }
}