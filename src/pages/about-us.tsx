import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/Seo';

function AboutUS() {
  return (
    <Layout title="About us">
      <p>We are the happies sicker store</p>
    </Layout>
  );
}

export const Head = () => <Seo title="About us" />;

export default AboutUS;
