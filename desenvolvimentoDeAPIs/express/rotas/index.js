import express from 'express'

const app = express()
app.use(express.json())

app.get("/", (_req, res)=> {
   res.send("Hello Mundo!!")
})
//caracteres especiais

//com .all ele pode ser envocado por qualquer metodo, o method ele mostrar qual metodo foi utilizado
app.all("/testAll", (req, res) => {
   res.send(req.method)
})

//com o ? no final da url, pode usar ou não precisa usar a letra anterior.
app.get("/teste?", (_, res)=> {
   res.send("/teste?")
})

//com o + no final da url, pode repetir a letra anterior ao ilimitado
app.get("/buzz+", (_, res)=> {
   res.send("/buzz+")
})

//com o * no meio da url, pode colocar qualquer letra ao ilimitado entre o *
app.get("/one*Blue", (req, res)=> {
   res.send(req.path)
})

// () é tratado como unidade, exemplo com ? ele trata com opcional o q tem dentro do ()/ pode juntar outros elementos
//req.body -> enviando paramentros no body
app.post("/test(ing)?", (req, res) => {
   console.log(req.body)
   res.send("/test(ing)?")
})
//Expressões regulares
app.get(/.*Red$/, (_req, res) => {
   res.send("/.*Red$/")
})

//paramentros na rota
app.get("/testParam/:id/:a?", (req, res) => {
   res.send(req.params.id + " - " + req.params.a)
})

//parametros via query
app.get("/testQuery", (req, res) => {
   res.send(req.query)
})

//next
app.get("/testMultipleHandlers", (req, res, next) => {
   console.log("Callback 1")
   next()
}, (req, res) => {
   console.log("Callback 2")
   // res.send("return")
   res.end()
})

//next com array
const Callback1 = (req, res, next) => {
   console.log("Callback 1")
   next()
}
function Callback2 (req, res, next){
   console.log("Callback 2")
   next()
}
const Callback3 = (req, res, next) => {
   console.log("Callback 3")
   res.end()
}
app.get("/testMultipleHandlersArray", [Callback1, Callback2,Callback3])

//Route
app.route("/testRoute")
.get((req, res) => {
   res.send("/testRoute GET")
})
.post((req, res) => {
   res.send("/testRoute POST")
})
.put((req, res) => {
   res.send("/testRoute PUT")
})
.delete((req, res) => {
   res.send("/testRoute DELETE")
})


app.listen(5000, () => {
   console.log("API started!!")
})