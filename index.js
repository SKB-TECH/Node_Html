import express from 'express'
import * as dotenv from 'dotenv'
import path from 'path'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()

const app=express()
const port=process.env.PORT ||4500

app.use('/', express.static(path.join(__dirname,'./src/template')))

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './src/template/index.html'))
})
app.listen(port,()=>{
    console.log(`serveur est lancer:localhost:${port}`)
})