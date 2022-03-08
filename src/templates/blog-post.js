import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="py-12">
      {helmet || ""}
      <div className="max-w-5xl m-auto pt-20 md:pt-24">
        <div className="max-w-3xl m-auto">
          <div className="flex items-center justify-center">
            {tags.map(tag => {
              return (
                <div className="flex items-center justify-center px-2">
                  <p className="btn-title m-auto block px-5 py-2 border border-transparent text-base font-medium rounded-full text-white bg-black">{tag}</p>
                </div>
              )
            })}
          </div>
          <h1 className="text-center mt-2 text-4xl leading-8 font-extrabold tracking-tight text-black sm:text-5xl max-w-3xl m-auto">
            {title}
          </h1>
          <p className="text-center mt-4 m-auto max-w-2xl text-xl text-gray-400">
            {description}
          </p>
          <PostContent content={content} className="blogPost-content" />
          <div className="flex items-center mt-6">
            {tags.map(tag => {
              return (
                <div className="flex items-center justify-center pr-10">
                  <p className="btn-title m-auto block px-5 py-2 border border-transparent text-base font-medium rounded-full text-white bg-black">{tag}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;