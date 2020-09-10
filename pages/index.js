import React, { Component } from 'react';
import Layout from '../components/Layout'

export default function Index({ youtube, preview }) {
  return (
    <Layout>
        <span>hi</span>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  let youtube = {};
//   const result = await getVideos();
//   youtube = result.data.items;

  return {
    props: { youtube }, // will be passed to the page component as props
  };
}
