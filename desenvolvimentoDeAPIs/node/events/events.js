import { EventEmitter } from "events"

const eventEmitter = new EventEmitter()

eventEmitter.on("testEvent", obj => {//on para escutar evento
   console.log(obj)
})

//eventEmitter.emit("testEvent", "abc")//emit esta emitindo


export default eventEmitter