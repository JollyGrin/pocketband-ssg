# Pocket.Band
Share pocket operator backups via youtube links

This site is a simple wrapper for youtube playlists and yaml in the video's description. 

https://pocket.band

# Share a video
Videos in a loaded playlist can be shared directly using the video id. For example: http://pocket.band/A57N9xK4B4w

# Run yourself
1. git clone this project
2. `npm i`
3. create a `.env` and add `YTKEY=` with your youtube v3 api key (https://console.developers.google.com/)
4. go in the package script and delete deploy
5. In pages/index.js edit `const playlist =` with a youtube playlist id.
6. `npm run dev`

