const request = require('supertest')
const app = require('./main.js')

test('hello NodeJS', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual("Hello World!")
})

test('parse an example pdf and return only the text', async () => {
    const test = await request(app).get('/document')
    const response = await request(app).get('/document');
    
    expect(response.status).toBe(200);
    expect(test.text).toContain("USENIX Example Paper")
})
