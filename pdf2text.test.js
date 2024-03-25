const request = require('supertest')
const app = require('./main.js')

test('upload an example pdf', async () => {
    const response = await request(app).post('/documents').attach('document', 'example.pdf')
    
    expect(response.status).toBe(200);
    expect(response.text).toContain("USENIX Example Paper")
})
