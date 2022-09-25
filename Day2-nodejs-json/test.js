const { application } = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

let personlist = [

    { name: 'John Constantine', age: 41, height: 180.8},
    { name: 'Lucifer Morningstar', age: 999, height: 178.0},
    { name: 'Matt Ryan', age:42, height:178.5}

]

app.get('/', (req, res) =>{
    res.send('root! Hello!')
})

app.get('/person', (req, res)=>{
    //res.send(personlist)

    for(var i = 0; i<personlist.length; i++){
        console.log((i+1) + "번쨰")
        console.log((i+1) + "이름" + personlist[i].name)
        console.log((i+1) + "나이" + personlist[i].age)
        console.log((i+1) + "키" + personlist[i].height)
    }
    
})

app.get('/person/:name', (req, res)=>{
    //res.send(personlist)

    console.log(req.params)
    console.log(req.params.name)
    const name = req.params.name

    for(var i = 0; i<personlist.length; i++){
        console.log((i+1) + "번쨰")
        console.log((i+1) + "이름" + personlist[i].name)
        console.log((i+1) + "나이" + personlist[i].age)
        console.log((i+1) + "키" + personlist[i].height)
    }
    
})

//근데 객체가 10개 20개 이러면? 이걸 일일히 페이지에 넘긴다? 바보짓임
//그래서 그걸 리액트-클라이언트때 post하면서 배움 
//근데 설명만 하고 오늘 안 가르쳐주실 생각인가... 책 사야지... 

app.get('/person/add/:name&:age&:height', (req, res)=>{

    console.log('/person/add/:name&:age&:height')
    console.log(req.params)
    const name= req.params.name
    const age = req.params.age
    const height = req.params.height
    const personObj = req.params

    // personlist.push(personObj)
    //or
    personList = personlist.concat(personObj)

    console.log('Info add success!')
     
    for(var i = 0; i<personlist.length; i++){
        console.log((i+1) + "번쨰")
        console.log("이름 : " + personlist[i].name)
        console.log("나이 : " + personlist[i].age)
        console.log("키 : " + personlist[i].height)
        console.log("   ")
    }

})



//update 
app.get('/person/update/:name&:age&:height', (req, res)=>{

    console.log('/person/update/:name&:age&:height')
    console.log(req.params)
    const name= req.params.name
    const age = req.params.age
    const height = req.params.height
    const personObj = req.params

    for(var i = 0; i<personList.length; i++){
        if(personList[i].name==name){
            personList[i].name == name
            personList[i].age == age
            personList[i].height == height
        }
    }

    console.log('Info update success!')
     
    for(var i = 0; i<personlist.length; i++){
        console.log((i+1) + "번쨰")
        console.log("이름 : " + personlist[i].name)
        console.log("나이 : " + personlist[i].age)
        console.log("키 : " + personlist[i].height)
        console.log("   ")
    }

})

//concat은 추가된 배열이 반환되기 때문에 따로 받아줘야 함 

//delete
app.get('/person/delete/:name', (req, res)=>{

    console.log('/person/delete/:name')
    console.log(req.params)
    const name=req.params.name
    const personObj = req.params

    personList = personlist.concat(personObj)


    var del_index = 0

    for(var i = 0; i <personList.length; i++){
        if(personList[i].name == name){
            del_index = i
            break;
        }
    }
   
    var slicedList = personList.splice(del_index, 1)

    console.log('Info Delete success!')
     
    for(var i = 0; i<slicedList.length; i++){
        console.log((i+1) + "번쨰")
        console.log("이름 : " + slicedList[i].name)
        console.log("나이 : " + slicedList[i].age)
        console.log("키 : " + slicedList[i].height)
        console.log("   ")
    }


})


//용케 CRUD는 다 했네요!축하합니다! 집에가서 공부하세요 



app.listen(PORT, ()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})



