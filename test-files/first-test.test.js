const request = require('supertest');
const app = require('../index.js');

describe('here we go', () => {
    test('checking the / get', async () => {
        const res = await request(app).get("/");
        // console.log('lets check the res', res);
        expect(res.text).toEqual('HEY THERE');
    });
    test('checking the /second-route post', async () => {
        const res = await request(app).post('/second-route');
        expect(res.text).toEqual('LETS CHECK THE SECOND ROUTE WITH A POST REQUEST');
    })
})