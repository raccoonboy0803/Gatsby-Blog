import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

export default function IndexPage() {
  return (
    <Layout title="Welcome to my DevStickers 👋🏻">
      <StaticImage
        src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Stickers on the wall"
      />
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
