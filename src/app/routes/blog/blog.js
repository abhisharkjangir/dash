import React from "react";
import "./blog.scss";
import { pathOr } from "lodash/fp";
import Page from "../../components/page";
import Meta from "../../constants/meta";

class Blog extends React.PureComponent {
  static getDerivedStateFromProps(props, state) {
    const { match } = props;
    const blogId = pathOr(null, "params.blogId", match);
    if (blogId) {
      return {
        blogId
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const { data, isFetching, fetchBlog } = this.props
    const { blogId } = this.state;
    if(!isFetching) fetchBlog(blogId);
  }

  render() {
    const { data, isFetching, fetchBlog } = this.props
    return (
      <Page {...Meta.blog}>
        {!isFetching && data.title}
      </Page>
    );
  }
}

export default Blog;
