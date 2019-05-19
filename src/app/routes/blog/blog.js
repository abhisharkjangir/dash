import React from "react";
import "./blog.scss";
import { pathOr } from "lodash/fp";
import Page from "../../components/page";
import Meta from "../../constants/meta";
import { Row, Col } from "../../components/layout";
import { findValueById, formatDate } from "../../utils/common";
import { TRENDING, FEATURED, PUBLISHED_BY, PUBLISH } from "../../constants";

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

  componentDidMount() {
    const { isFetching, fetchBlog } = this.props;
    const { blogId } = this.state;
    if (!isFetching) fetchBlog(blogId);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  renderPageHeader = () => {
    return (
      <div className="page-header">
        <h1>Blog Detail</h1>
      </div>
    );
  };

  contentBlock = (title, content, className) => {
    return (
      <div className="content-block">
        <div className="heading">{title}</div>
        <div className={`content ${className ? className : ""}`}>{content}</div>
      </div>
    );
  };

  renderCategories = category => {
    const { categories } = this.props;
    let cats = [];
    if (category) {
      category.map(sc => {
        let storyCat = categories.filter(ac => ac._id === parseInt(sc));
        if (storyCat.length > 0) cats.push(storyCat[0].name);
        return sc;
      });
    }
    return <span>{cats.toString()}</span>;
  };

  renderPageBody = () => {
    const { data } = this.props;
    const {
      title,
      author,
      keywords,
      imageSrc,
      story,
      category,
      isPublished,
      publishedBy,
      isFeatured,
      isTrending,
      viewsCount,
      sharedCount,
      createdDate,
      updatedDate,
      publishedDate
    } = data;
    return (
      <div className="page-body">
        <Row>
          <Col lg="8">{this.contentBlock("title", title)}</Col>
          <Col lg="4">{this.contentBlock("author", author)}</Col>
        </Row>
        <Row>
          <Col lg="6">
            <Row>
              <Col lg="6">
                {this.contentBlock(
                  "publish Status",
                  findValueById(PUBLISH, isPublished)
                )}
              </Col>
              <Col lg="6">
                {this.contentBlock(
                  "Published By",
                  findValueById(PUBLISHED_BY, publishedBy)
                )}
              </Col>
              <Col lg="6">
                {this.contentBlock(
                  "Published Date ",
                  formatDate(publishedDate)
                )}
              </Col>
              <Col lg="6">
                {this.contentBlock("Updated Date", formatDate(updatedDate))}
              </Col>
              <Col lg="6">
                {this.contentBlock("Created Date  ", formatDate(createdDate))}
              </Col>
              <Col lg="6" />
              <Col lg="4">
                {this.contentBlock("Shared Count ", sharedCount)}
              </Col>
              <Col lg="4">{this.contentBlock("Views Count ", viewsCount)}</Col>
              <Col lg="4" />
              <Col lg="4">
                {this.contentBlock(
                  "Trending",
                  findValueById(TRENDING, isTrending)
                )}
              </Col>
              <Col lg="4">
                {this.contentBlock(
                  "Featured",
                  findValueById(FEATURED, isFeatured)
                )}
              </Col>
            </Row>
          </Col>
          <Col lg="6">
            <Row>
              <Col lg="12">
                {this.contentBlock("IMAGE", <img src={imageSrc} alt={title} />)}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="12">{this.contentBlock("Keywords ", keywords)}</Col>
          <Col lg="12">
            {this.contentBlock("Category", this.renderCategories(category))}
          </Col>

          <Col lg="12">
            {this.contentBlock(
              "Blog",
              <span dangerouslySetInnerHTML={{ __html: story }} />,
              "bg-white"
            )}
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    return (
      <Page {...Meta.blog}>
        <div className="blog-page">
          {this.renderPageHeader()}
          {this.renderPageBody()}
        </div>
      </Page>
    );
  }
}

export default Blog;
