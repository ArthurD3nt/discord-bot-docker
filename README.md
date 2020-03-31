# Discord-bot-docker

A pre-made cozy container for your bot

## Getting Started

All you need to do is run:
```
docker run arthurd3nt/discord-bot
```
## Environment variables

### token 
! The token is required in order to run the container without it, the container will fail to run
```
-e token="your_bot_token" 
```

### prefix
You can add the prefix you want and it's not necessary for you to specify it, by default the prefix is !
```
-e prefix="your_favorite_prefix" 
```

## Volumes
You obviously want your index.js to change in order to implement your personal bot
To do that you simply need to map the directory /usr/src/bot to a directory on your vps
```
-v /path/to/local/directory:/usr/src/bot
```
But remember, in order to apply the changes you need to restart the container with:
```
docker restart "name_of_container"
```
