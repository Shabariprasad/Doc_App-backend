//1 import json-server
const jsonserver = require('json-server')

//2 create a server application using json-server
const docServer = jsonserver.create()

//3 Setup path for db.json
const router = jsonserver.router('db.json')

//4.return a middlware instance used by json-server
const middleware = jsonserver.defaults()

//5.setup port for db.json
const port = 4000

//use in server
docServer.use(middleware)
docServer.use(router)

//to run the server(restserver)
docServer.listen(port,()=>{
    console.log("doc server listening on port" +port);
})