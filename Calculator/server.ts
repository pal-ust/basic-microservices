import express from 'express';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json());

app.listen(3001 , () => {
    console.log("Calculator microservice is running at port 3001")
})

app.post('/add' , (req : express.Request, res : express.Response) => {
    res.json(req.body.a + req.body.b)
})

app.post('/sub' , (req : express.Request, res : express.Response) => {
    res.json(req.body.a - req.body.b)
})

app.post('/mul' , (req : express.Request, res : express.Response) => {
    res.json(req.body.a * req.body.b)
})

app.post('/div' , (req : express.Request, res : express.Response) => {
    res.json(req.body.a / req.body.b)
})