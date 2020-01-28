

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log(error)
    }
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Jeroen',
    //     age: 52
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {    
    //         name: 'Jen',
    //         age: 45
    //     }, 
    //     {
    //         name: 'Bart',
    //         age: 34
    //     }
    // ], (e, r) => {
    //     if (e) {
    //         return console.log(e)
    //     }
    //     console.log(r.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         desc: 'first task',
    //         completed: false
    //     },
    //     {
    //         desc: '2nd',
    //         completed: true
    //     },
    //     {
    //         desc: 'lastOne',
    //         completed: false
    //     }
    // ], (e,r) => {
    //     if (e) {
    //         return console.log(e)
    //     }
    //     console.log(r.ops)
    // })
    // const id = new ObjectID('5e1f7aa4e460e1d796d5ee16')
    // db.collection('users').findOne({ _id: id}, (e,r) => {
    //     if (e) {
    //         return console.log(e)
    //     }
    //     console.log(r)
    // })
    // db.collection('users').find({age: 52}).toArray((e,r) => {
    //     if (e) {
    //         return console.log(e)
    //     }
    //     console.log(r)
    // })

    // const update = db.collection('users').updateOne({_id: new ObjectID('5e1f7aa4e460e1d796d5ee16')}, {
    //     $set: {
    //         name: 'Pim'
    //     }
    // })

    // update.then((result) => {
    //     console.log(result)
    // }).catch((e) => {
    //     console.log(e)
    // })

    // const update = db.collection('tasks').updateMany({completed: false}, {
    //         $set: {
    //             completed: true
    //         }
    //     })
    
    // update.then((result) => {
    //     console.log(result)
    // }).catch((e) => {
    //     console.log(e)
    // })

    const del = db.collection('users').deleteMany({age:52})
    del.then((r) => {
        console.log(r)
    }).catch((e) => {
        console.log(e)
    })


})