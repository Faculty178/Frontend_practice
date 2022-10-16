const express = require('express');
const app  = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')

app.get('/',(req, res)=>{
    console.log('root!')
})

app.get('/movies', (req, res)=>{
    console.log('/movies')
    db.query("select * from movies", (err, data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/movies/insert/id=:id&title=:title&dir=:director&runtime=:running_time', (req, res)=>{
    console.log('/movies/insert/id=:id&title=:title&dir=:director&runtime=:running_time')
    const id = req.params.id
    const title = req.params.title
    const dir = req.params.director 
    const runtime = req.params.running_time

    console.log('id:' + id)
    console.log('title:' + title)
    console.log('director:' + dir)
    console.log('Running Time:' + runtime)


    db.query(`INSERT INTO movies values(${id}, '${title}', '${dir}', ${runtime})`, (err, data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})


app.get('/movies/:id', (req, res)=>{
    console.log('/movies/:id')
    const id = req.params.id
    db.query(`select * from movies where id=${id}`, (err, data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
    
})

app.get('/movies/update/id=:id&runtime=:running_time', (req, res)=>{
    console.log('/movies/update/id=:id&runtime=:running_time')
    const id = req.params.id
    const runtime = req.params.running_time

    console.log('id:' + id)
    console.log('Running Time:' + runtime)


    db.query(`UPDATE movies SET( running_time= ${runtime}) WHERE id=${id}`, (err, data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server On: http://localhost:${PORT}/`)
})

//crud다 해보기 
//내일 정처기 어떡해에ㅔㅔ,.,,ㅔㅔ,,,,,