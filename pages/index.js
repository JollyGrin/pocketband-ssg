import React, { Component } from 'react';
import Layout from '../components/Layout';
import Video from '../components/Video';
import { getPlaylist, getVideo } from '../assets/js/youtube';
import Hero from '../components/Hero';
import SectionVideos from '../components/SectionVideos';

import mockResult from '../assets/mock/resultDataItems.json';

export default function Index({ youtube, preview }) {
  return (
    <Layout>
      <Hero />
      <SectionVideos youtube={youtube} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const playlist = `PLJo8JIekHU8l39jtfwLsLptOmTqXc2oiW`;
  const result = await getPlaylist(playlist);
  const youtube = result.data.items;

  // console.log(JSON.stringify(youtube));
  // const youtube = mockResult;

  return {
    props: { youtube }, // will be passed to the page component as props
  };
}
