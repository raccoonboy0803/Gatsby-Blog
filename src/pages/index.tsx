import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/Seo';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import { PageProps, graphql } from 'gatsby';

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to my DevStickers 👋🏻">
      {data.allContentfulStickerPack.nodes.map((sticker) => (
        <article key={sticker.name}>
          <GatsbyImage
            image={getImage(sticker.preview?.gatsbyImageData!)!}
            alt={sticker.name!}
          />
          <h2>{sticker.name}</h2>
          <h4>{`$ ${sticker.price}`}</h4>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
