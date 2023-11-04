# Discord bot
Simple discord bot made with `nodejs`, `Expressjs`, `Discord API` (`discord-interactions` library)

## Install
change .env.template to your configs.

install the necesary libraries
```
npm install
```
If the bot is in develope, use `ngrok` to create a tunnel. The port should be the same than the nodejs port:
```
ngrok http 3000
```
register the slash commands 
```
npm run commands
```
start in developer mode
```
npm start
```