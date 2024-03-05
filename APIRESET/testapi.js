const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Task API', () => {
  describe('POST /reset', () => {
    it('should reset the task list', (done) => {
      chai.request(app)
        .post('/reset')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('Task list has been reset');
          done();
        });
    });
  });

  describe('POST /tasks', () => {
    it('should add a new task', (done) => {
      const task = { id: 1, name: 'Task 1' };
      chai.request(app)
        .post('/tasks')
        .send(task)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.message).to.equal('Task added successfully');
          done();
        });
    });
  });
});

