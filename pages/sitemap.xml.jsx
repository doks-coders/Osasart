import React from 'react';
import * as fs from 'fs'
import fetchAll from '../MongoScripts/fetchAll';

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'http://localhost:3000';


 
let staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.jsx",
        "index.js",
        "PrimeComponents",

      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

    staticPaths.push(`${BASE_URL}/`)


   // some remote API call maybe!

    const allPosts = await fetchAll()

const dynamicPaths = allPosts.map( post => {
  
  return `${BASE_URL}/blog/${post._id}`
  
})



const allPaths =[ ...staticPaths , ...dynamicPaths ];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
`;


    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap
