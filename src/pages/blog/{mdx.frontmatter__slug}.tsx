import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import Seo from '../../components/Seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface BlogProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: BlogProps) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title="">
      <GatsbyImage image={image!} alt={data.mdx?.frontmatter?.title!} />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        date
        title
        slug
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: BlogProps) => (
  <Seo title={data.mdx?.frontmatter?.title as string} />
);
