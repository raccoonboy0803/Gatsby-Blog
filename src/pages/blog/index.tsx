import React from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/Seo';

function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Hello, welcome to my blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          author
          category
          date(formatString: "YYYY.MM.DD")
          title
          slug
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;

export default Blog;
