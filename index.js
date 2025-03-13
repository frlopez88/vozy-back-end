const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())

app.post('/crearOrden', async (req,res)=>{

    const data = {
        ws_u: "UVOZY",
        ws_p: "s5czl5r6",
        cliente: "806968",
        actividad: "CSP",
        comentario: "Prueba de Middleware",
        motivo: "164"
    };

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

    const result = await fetch("https://wscbdev.cablecolor.hn/API/crearOrden", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if(result.ok){
        const data = await result.json()
        return res.json(data)
    }else{
        res.status(500).json({mensaje:"Error"})
    }

})

app.listen(8080)