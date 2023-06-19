const server =require('../src/server')
const supertest = require('supertest')
const request = supertest(server.app)
const {db}= require('../src/auth/models/index')
beforeAll(async () => {
    await db.sync();
});
describe('server testing',()=>{
    test('POST to /signup to create a new user',async ()=>{
        const responce = await request.post('/signup').send({
            "username" :"ahmad",
            "password" : "123"
        })
        expect(responce.status).toBe(201)
    })
    test('POST to /signin to login with correct user (use basic auth)',async()=>{
        const responce = await request.post('/signin').send({
            "username" :"ahmad",
            "password" : "123"
        })
        expect(responce.status).toBe(200)
    })
    test('POST to /signin to login with wrong password (use basic auth)',async()=>{
        const responce = await request.post('/signin').send({
            "username" :"ahmad",
            "password" : "1223"
        })
        expect(responce.status).toBe(500)
        expect(responce.body['error massege']).toBe("Invalid Login : wrong password")
    })
    test('POST to /signin to login with wrong username (use basic auth)',async()=>{
        const responce = await request.post('/signin').send({
            "username" :"ahad",
            "password" : "123"
        })
        expect(responce.status).toBe(500)
        expect(responce.body['error massege']).toBe("Invalid Login : this user is not exist")
    })
})


afterAll(async () => {
    await db.drop();
});