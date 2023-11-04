export const faq = 
`
Preguntas y respuestas sobre este BOT\n
**¿Cuál es el propósito?**
- Practicar Express y Nodejs. A la vez que probar la API de Discord

**¿Qué se puede hacer con este bot?**
- [ ] Mensaje de bienvenida\n
- [x] FAQ (/faq)\n
- [x] Obtener una imagen pseudorandom (/image)\n
- [x] Retornar el texto que ingreses en BOLD (/bold)\n
- [x] Lanzar una moneda (/coin)\n
- [x] Obtener un número random de 1 - 100 (/number)\n
- [x] Info sobre el creador (/EnNvy)\n
- [ ] Enter to a voice channel and stay mute\n
- [ ] Reproduce a music in a voice channel\n
`

export const coin = () =>{
    const flag = Math.round(Math.random())
    return flag ? 'cara' : 'sello'
}

export const number = () => {
    return Math.floor((Math.random() * (100 - 1)) + 1)
}

export const ennvy = () => {
    return `
    Just a great developer
    👌
    `
}