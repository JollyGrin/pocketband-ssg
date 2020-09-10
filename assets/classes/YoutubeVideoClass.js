export default class YoutubeVideoClass {
  constructor(video) {
    this.id = video.id;
    this.title = video.snippet.title;
    this.channelId = video.snippet.channelId;
    this.channelTitle = video.snippet.channelTitle;
    this.desc = video.snippet.description;
    this.yaml = video.snippet.description.split('@pocket.band')[1];
    this.published = video.snippet.publishedAt;
    this.thumbnails = video.snippet.thumbnails;
  }
}
