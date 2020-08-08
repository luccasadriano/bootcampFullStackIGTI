import http from "http"

http.createServer((req, res) => {
   if((req.method === "GET") && (req.url === "/test")){
      res.write("GET teste executado com sucesso")
   }else{
      res.write("hello Wolrd!!")
   }
   res.statusCode = 200
   res.end()
}).listen(8080)

//para executar nodemon --experimental-modules index.js