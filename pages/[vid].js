import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { getPlaylist, getVideo } from '../assets/js/youtube';
import Video from '../components/Video';
import VideoBox from '../components/VideoBox';
import YoutubeVideoClass from '../assets/classes/YoutubeVideoClass';
import Nav from '../components/Nav';

export default function Post({ vid, preview }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const video = new YoutubeVideoClass(vid);
  const details = video?.yaml();

  const styles = {
    bgImg: {
      backgroundImage: `url(${video.thumbnails.high.url})`,
    },
  };

  return (
    <Layout>
      <Nav />
      <section id='vid-wrapper'>
        <div className='iframe-wrapper'>
          <iframe
            id='ytplayer'
            type='text/html'
            width='640'
            height='360'
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&fs=0&origin=http://pocket.band`}
            frameborder='0'
          ></iframe>
        </div>
        <div className='content-wrapper'>
          <div className='content-header'>
            <div>
              <h1>{details.title}</h1>
              <h2>{details.author}</h2>
            </div>
            <span>PO: {details.po ? details.po : 'n/a'}</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  let mockid = `A57N9xK4B4w`;
  let vid = params.vid;

  const result = await getVideo(params.vid);

  return {
    props: {
      vid: result.data.items[0],
    },
  };
}

export async function getStaticPaths() {
  const playlist = `PLJo8JIekHU8l39jtfwLsLptOmTqXc2oiW`;
  const result = await getPlaylist(playlist);

  const paths = result.data.items.map((video) => ({
    params: { vid: video.snippet.resourceId.videoId },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
