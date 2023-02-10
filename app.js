const fs = require("fs");
const path = require("path");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

async function getPlaylistData(playlistId) {
  const youtubeApiKey = process.env.YOUTUBE_API_KEY;

  const res = await axios.get(
    `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${youtubeApiKey}`
  );
  const playlist = res.data.items[0];
  const playlistName = playlist.snippet.title;

  const resVideos = await axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${youtubeApiKey}`
  );
  const videos = resVideos.data.items;

  const playlistData = [];
  for (const video of videos) {
    const videoData = {
      publishedAt: video.snippet.publishedAt,
      title: video.snippet.title,
      link: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
      thumbnail: video.snippet.thumbnails.high.url,
      playlistId: video.snippet.playlistId,
      videoOwnerChannelTitle: video.snippet.videoOwnerChannelTitle,
      description: video.snippet.description,
    };

    playlistData.push(videoData);
  }

  return { playlistName, playlistData };
}

async function main({ playlistId }) {
  const { playlistName, playlistData } = await getPlaylistData(playlistId);

  // Verifica se a pasta "playlist_dataSave" existe, caso contrário, cria uma.
  if (!fs.existsSync(path.resolve(__dirname, "playlist_dataSave"))) {
    fs.mkdirSync(path.resolve(__dirname, "playlist_dataSave"));
  }

  fs.writeFileSync(
    path.resolve(__dirname, "playlist_dataSave", `playlist-${playlistId}.json`),
    JSON.stringify({ playlistName, playlistData })
  );
  console.log(`Arquivo playlist-${playlistId}.json salvo com sucesso.`);
}

main({
  playlistId: "PLxI8Can9yAHcXBgFryV0AV7LYdLR1skuF",
});
