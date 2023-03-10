# video-playlist-home-assignment

This project is a video playlist implementation made by Raz Kerman.
I ran the code locally using Node v19.0.0, npm 8.19.2 and on Windows 11.

## Running

1. Run npm install in `server/`.
2. Add a `.env` file (you can use .env.example) in the `server/` directory with an YOUTUBE_DATA_API_KEY for the YouTube
   Data API (v3) (You can contact Raz if you don't have one).
3. Run npm run in `server/`.
4. Run npm install in `client/`.
5. Add a `.env` in the `client/` directory (you can use .env.example).
6. npm start in `client/`.

## Things to add (if I had more time)

1. More tests for frontend (Redux and socket.io).
2. Tests for backend.
3. Add delete video and moving video order in the playlist.

## The Client

The client allows users to add videos to the playlist. The updates that a user makes are simultaneously committed to
their local copy of the playlist and sent to the server (via socket.io). Once a user added a video, other clients see the addition.

### Important Note: I know that the specfication says to add video url, But I found it more helpfull to use Youtube API, run a query and to return the first video that serves the query.

## Client Tests

To run tests use npm run test. I made tests for 1 major component only, but if I had more time I would test Redux and socket.io as well.

## The Server

The server acts as the source of truth for the playlist. It receives playlist
update from users and updates its playlist accordingly.
