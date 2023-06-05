import express from 'express';
import httpProxy from 'express-http-proxy';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json());

app.listen(3000 , () => {
    console.log(`API Gateway Running at port 3000`);
});

const calcServiceProxy : any = httpProxy('http://127.0.0.1:3001')
const dateServiceProxy : any = httpProxy('http://127.0.0.1:3002')

app.post('/add' , (req : express.Request , res : express.Response) =>{
    calcServiceProxy(req , res)
})

app.post('/sub' , (req : express.Request , res : express.Response) =>{
    calcServiceProxy(req , res)
})

app.post('/mul' , (req : express.Request , res : express.Response) =>{
    calcServiceProxy(req , res)
})

app.post('/div' , (req : express.Request , res : express.Response) =>{
    calcServiceProxy(req , res)
})

app.get('/todayDate' , (req : express.Request , res : express.Response) => {
    dateServiceProxy(req , res)
})

app.post('/dateDiff' , (req : express.Request , res : express.Response) => {
    dateServiceProxy(req , res)
})

app.get('/test' , (req : express.Request , res : express.Response) => {
    console.log("Test")
})
