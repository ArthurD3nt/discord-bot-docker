![master](https://github.com/ArthurD3nt/discord-bot-docker/workflows/master/badge.svg)

# Discord-bot-docker

A pre-made cozy container for your bot

## Getting Started

All you need to do is run:
``` bash
docker run arthurd3nt/discord-bot
```
## Environment variables

### token 
! The token is required in order to run the container
``` bash
-e token="your_bot_token" 
```

### prefix
You can add the prefix you want and it's not necessary for you to specify it, by default the prefix is !
``` bash
-e prefix="your_favorite_prefix" 
```

## Volumes
You obviously want your index.js to change in order to implement your personal bot
To do that you simply need to map the directory /usr/src/bot to a directory on your vps
``` bash
-v /path/to/local/directory:/usr/src/bot
```
But remember, in order to apply the changes you need to restart the container with:
``` bash
docker restart "name_of_container"
```
