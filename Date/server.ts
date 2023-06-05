import express from 'express';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json());

app.listen(3002 , () => {
    console.log("Date microservice is running at port 3001")
})

app.get('/todayDate' , (req , res) => {
    let now = new Date
    res.json(now)
})

app.post('/dateDiff' , (req , res) => {
    const date1 : any = new Date(req.body.start);
    const date2 : any = new Date(req.body.end);
    const diffTime : number = Math.abs(date2 - date1);
    const diffDays : number = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    res.json(diffDays)
})