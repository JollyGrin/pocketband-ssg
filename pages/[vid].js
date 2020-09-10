import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { getPlaylist, getVideo } from '../assets/js/youtube';

export default function Post({ vid, preview }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <span>{JSON.stringify(vid)}</span>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  console.log('params', params);
  let vid = params.vid;

  const result = await getVideo(params.vid);

  return {
    props: {
      vid: result.data.items,
    },
  };
}

export async function getStaticPaths() {
  const playlist = `PLJo8JIekHU8l39jtfwLsLptOmTqXc2oiW`;
  const result = await getPlaylist(playlist);

  const paths = result.data.items.map((video) => ({
    params: { vid: video.snippet.resourceId.videoId },
  }));
  //   const paths = result.data.items.map((video) => {
  //     console.log('ihnijm', video);
  //   });

  return {
    paths: paths,
    fallback: false,
  };
}