const { application } = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3333;


//수정
//삭제

let carlist = [
    { name:'Sonata', modelnum:111, price:1234, company:'Hyundai'}, 
    { name:'Avante', modelnum:123, price:1111, company:'Hyundai'},
    { name:'Audi', modelnum:777, price:4444, company:'Audi'}
]

app.get('/', (req, res) =>{
    res.send('root! Hello!')
})

//전체 조회
app.get('/car', (req, res)=>{
    for(var i = 0; i<carlist.length; i++){
        console.log((i+1) + "번쨰")
        console.log( "이름" + carlist[i].name)
        console.log("모델 번호" + carlist[i].modelnum)
        console.log("가격" + carlist[i].price)
        console.log("회사" + carlist[i].company)
        console.log("   ")
    }
})

//부분 조회
app.get('/car/search/:name', (req, res)=>{

    console.log(req.params)
    console.log(req.params.name)
    const name = req.params.name
    var number = 0
    var i;

    for(i = 0; i<carlist.length; i++){
        if(carlist[i].name == name){
            number = i
            console.log('Search Success!')
            break;
        }
    }

    if(i < carlist.length){
        console.log((i+1) + "번쨰")
        console.log( "이름" + carlist[i].name)
        console.log("모델 번호" + carlist[i].modelnum)
        console.log("가격" + carlist[i].price)
        console.log("회사" + carlist[i].company)
        console.log("   ")
    }
    
})


//데이터 추가
app.get('/car/add/:name&:modelnum&:price&:company', (req, res)=>{

    console.log('/car/add/:name&:modelnum&:price&:company')
    console.log(req.params)
    const name= req.params.name
    const modelnum = req.params.modelnum
    const price = req.params.price
    const company = req.params.company
    const carObj = req.params

    carlist.push(carObj)
    
    console.log('Info add success!')
     
    for(var i = 0; i<carlist.length; i++){
        console.log((i+1) + "번째")
        console.log( "이름" + carlist[i].name)
        console.log("모델 번호" + carlist[i].modelnum)
        console.log("가격" + carlist[i].price)
        console.log("회사" + carlist[i].company)
        console.log("   ")
    }

})


//데이터 수정
app.get('/car/update/:name&:modelnum&:price&:company', (req, res)=>{

    console.log('/car/update/:name&:modelnum&:price&:company')
    console.log(req.params)
    const name= req.params.name
    const modelnum = req.params.modelnum
    const price = req.params.price
    const company = req.params.company
    const carObj = req.params

    for(var i = 0; i<carlist.length; i++){
        if(carlist[i].name==name){
            carlist[i].name == name
            carlist[i].modelnum == modelnum
            carlist[i].price == price
            carlist[i].company == company
        }
    }

    console.log('Info update success!')
     
    for(var i = 0; i<carlist.length; i++){
        console.log((i+1) + "번쨰")
        console.log("이름 : " + carlist[i].name)
        console.log("모델 번호 : " + carlist[i].modelnum)
        console.log("가격 : " + carlist[i].price)
        console.log("회사 : " + carlist[i].company)
        console.log("   ")
    }

})

//데이터 삭제
app.get('/car/delete/:name', (req, res)=>{

    console.log('/car/delete/:name')
    console.log(req.params)
    const name=req.params.name
    const carObj = req.params

    carlist = carlist.concat(carObj)

    var del_index = 0

    for(var i = 0; i <carlist.length; i++){
        if(carlist[i].name == name){
            del_index = i
            break;
        }
    }
   
    var slicedList = carlist.splice(del_index, 1)
    //carlist = slicedlist 해서 덮어쓴 다면 원래 리스트만 출력해도 됨. 

    //or
    // var slicedList = carlist.filter(carlist => carlist[del_index] != del_index)
    // var slicedList = carlist.slice blah blah blah
    
    console.log('Info Delete success!')
     
    for(var i = 0; i<slicedList.length; i++){
        console.log((i+1) + "번쨰")
        console.log("이름 : " + slicedList[i].name)
        console.log("모델 번호 : " + slicedList[i].modelnum)
        console.log("가격 : " + slicedList[i].price)
        console.log("회사 : " + slicedList[i].company)
        console.log("   ")
    }


})

//listen
app.listen(PORT, ()=>{
    console.log(`Server On: http://localhost:${PORT}`)


})

/*
    FILTERRRR 
    const model = req.param.model
    const result = carlist.filter(data=> data.model != model);
    console.log(result)
*/ 
