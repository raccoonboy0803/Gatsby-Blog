import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

interface SeoProps {
  title: string;
}

export default function Seo({ title }: SeoProps) {
  const data = useStaticQuery<Queries.MyDataQuery>(graphql`
    query MyData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
