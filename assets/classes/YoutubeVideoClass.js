import YAML from 'yaml';

export default class YoutubeVideoClass {
  constructor(video) {
    this.id = video.snippet.resourceId?.videoId
      ? video.snippet.resourceId.videoId
      : video.id;
    this.title = video.snippet.title;
    this.channelId = video.snippet.channelId;
    this.channelTitle = video.snippet.channelTitle;
    this.desc = video.snippet.description;
    this.yamlRAW = video.snippet.description.split('@pocket.band')[1];
    this.published = video.snippet.publishedAt;
    this.thumbnails = video.snippet.thumbnails;
  }

  yaml = () => {
    const string = `---${this.yamlRAW?.split('---')[1]}`;
    return YAML.parse(string);
  };
}
