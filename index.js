const express = require('express');
const path = require('path')
var bodyParser = require('body-parser');
const Add = require('./modules/add');
const SaveData = require('./modules/saveData')
const cors = require('cors');
const app = express();
const PORT = 5000;



app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/list',  (req, res) => {
    res.sendFile(path.join(__dirname, 'data' , 'data.json'))
})


app.post('/add', async (req, res) => {
   const item = new Add(req.body.nameItem, req.body.priority, req.body.finsh)
   await item.save()
   res.send(console.log('sucsess')) 
})

app.post('/changeData', async (req, res) => {
    console.log(req.body)
    const item = new SaveData(req.body)
    await item.save()
    res.send(console.log('sucsess'))

})
app.listen(PORT, (err) => {
    if(err) throw err

    console.log('server start')
})


