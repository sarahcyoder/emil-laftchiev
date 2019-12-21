/* eslint-disable array-callback-return */
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const queries = await graphql(`
    query {
      publications: allNodePublications {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);

  const {
    publications,
  } = queries.data;

  publications.nodes.map(publicationData =>
    createPage({
      path: publicationData.path.alias,
      component: path.resolve(`src/templates/publications.js`),
      context: {
        PostId: publicationData.id,
      },
    })
  );
};
