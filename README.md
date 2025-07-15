# Meshtastic67.org

![screenshot](readme-image.png)

## Description
This static website page aims at promoting Meshtastic community in Alsace.
You can join our Discord using this link :
<a href="https://discord.gg/aRYWN5HwFU">Discord</a>

## Development commands
```sh
git clone PROJECT
cd meshtastic67.org

bun install
bun dev
```

## Docker
```sh
cd meshtastic67.org
docker build -t meshtastic67.org .

docker run --detach --name meshtastic -p PORT:4321 meshtastic67.org
```

## Adding Hardware
edit /src/content/equipments.md
put corresponding image in /public/