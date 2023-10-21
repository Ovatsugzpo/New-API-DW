require('./database/connection')
const express = require('express'),
      app = express(),
      cors = require('cors'),
      routes = require('./router/routes')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",routes)
app.use(cors({origin: ['http://localhost:3000', 'https://www.amigitos-espanol-y-sla.com.br', 'https://amigitos-espanol-y-sla.com.br']}))

app.listen(5555)