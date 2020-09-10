import fetch from 'axios';

const key = process.env.YTKEY;
const maxResults = 100;

export const getPlaylist = async (playlistId) => {
  const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&type=video&order=date&maxResults=${maxResults}&playlistId=${playlistId}&key=${key}`;

  const result = await fetch(playlistUrl);
  return result;
};

export const getVideo = async (videoId) => {
  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${key}`;

  const result = await fetch(videoUrl);
  return result;
};
