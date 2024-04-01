import Fastify from 'fastify'

const app = Fastify()

app.get('/health-check', (request, reply) => {
    return { message: 'OK' }
})

app.listen({
    port: 3333
})