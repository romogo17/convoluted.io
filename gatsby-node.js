const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve("./src/templates/blog-post.js")

  graphql(`{
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            aliasPath
            path
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors){
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPost,
      })

      if (node.frontmatter.aliasPath) {
        createPage({
          path: node.frontmatter.aliasPath,
          component: blogPost,
        })
      }
    })
  })
}
