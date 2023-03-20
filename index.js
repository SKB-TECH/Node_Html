import express from 'express'
import * as dotenv from 'dotenv'


dotenv.config()

const app=express()
const port=process.env.PORT ||4500


app.listen(port,()=>{
    console.log(`serveur est lancer:localhost:${port}`)
})