import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { getPlaylist, getVideo } from '../assets/js/youtube';
import Video from '../components/Video';
import VideoBox from '../components/VideoBox';

export default function Post({ vid, preview }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <VideoBox video={vid} />
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
