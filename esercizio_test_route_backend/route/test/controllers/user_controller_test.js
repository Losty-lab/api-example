const request=require('supertest');
const mongoose=require('mongoose');
const app=require('../../app');
const assert=require('assert');
const User=mongoose.model('users')


describe('Testing db test creation', ()=>{

    it('Test creating a user',(done)=>{

        request(app)
        .post('/api/user')
        .send({email:'dario@d.it', password:'abcd'})
        .end(()=>{
            User.count().then(count=>{
                console.log('count',count)
                assert(count===1)
                done()
            })
        })


    })
})