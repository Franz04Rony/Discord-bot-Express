import 'dotenv/config'
import express from "express"
import{
    InteractionType,
    InteractionResponseType
} from 'discord-interactions'
import { verifyDiscordRequest, faq, coin, number, ennvy } from './utils/index.js'


const app = express()
const port = process.env.PORT ?? 3010

app.use(express.json({
    verify: verifyDiscordRequest(process.env.PUBLIC_KEY)
}))

app.post('/interactions', async (req, res, next) => {
    const {type, id, data} = req.body

    if (type === InteractionType.PING) {
        return res.send({ type: InteractionResponseType.PONG });
      }

    if (type === InteractionType.APPLICATION_COMMAND){
        const command = data.name
        if (command === 'faq'){
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                  content: faq,
                },
              });
        }

        if (command === 'coin'){
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                  content: coin(),
                },
              });
        }

        if (command === 'number'){
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                  content: number(),
                },
              });
        }

        if (command === 'ennvy'){
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                  content: ennvy(),
                },
              });
        }

        const url = ""
        if (command === 'image'){
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: 'He aquí una imagen!',
                    embeds: [{
                        image: {
                            url
                        }
                    }]
                }
            })
        }
    }

})

app.listen( port , ()=>{
    console.log(`Escuchando el puerto ${port}`)
} )