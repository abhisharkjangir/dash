import React from "react";
import { Link } from 'react-router-dom';
import { pathOr } from "lodash/fp";
import "./tagging.scss";
import Page from "../../components/page";
import Meta from "../../constants/meta";
import PageHeading from "../../components/common/pageHeading";
import LinkButton from "../../components/common/linkButton";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchBlogs();
  }

  componentWillReceiveProps(nextProps) {
    // Auto Select category (if not selected)
    if(nextProps.selectedCategory === null && nextProps.categories.length > 0) {
      nextProps.selectCategory(nextProps.categories[0]._id);
    }
  }

  selectCategory = cat => {
    const { selectCategory } = this.props;
    selectCategory(cat._id);
  };

  isTagged = blog => {
    const { selectedCategory } = this.props;
    const blogCategories = pathOr(undefined, "category", blog);
    if (!selectedCategory) return false;
    if (blogCategories && blogCategories.length < 1) return false;
    if (blogCategories.includes(selectedCategory.toString())) return true;
    return false;
  };

  renderPageHeader = () => {
    return (
      <div className="page-header">
        <h1>Category - Blog Tagging</h1>
        <LinkButton to="/blog/add" className='float-right' label="Add New Blog" />
      </div>
    );
  };

  renderPageBody = () => {
    return (
      <div className="page-body">
        {this.renderCategories()}
        {this.renderBlogs()}
      </div>
    );
  };

  renderCategories = () => {
    const { categories, selectedCategory } = this.props;
    return (
      <ul className="category-list">
        <p>Categories</p>
        {categories &&
          categories.map(cat => (
            <li
              key={cat._id}
              className={selectedCategory === cat._id ? "active" : ""}
              onClick={() => this.selectCategory(cat)}
            >
              {cat.name}
            </li>
          ))}
      </ul>
    );
  };

  renderBlogs = () => {
    const { blogs } = this.props;
    return (
      <ul className="blogs-list">
        <p>Blogs</p>
        {blogs && blogs.map(blog => this.renderBlogItem(blog))}
      </ul>
    );
  };

  renderBlogItem = blog => {
    const isTagged = this.isTagged(blog);
    const tick = '✔';
    const cross = '✘'
    return (
      <li key={blog._id} className={isTagged ? "active" : ""}>
        <div className='tag-status' title={isTagged ? 'Tagged' : 'Not Tagged'}>{isTagged ? tick : cross}</div>
        <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
      </li>
    );
  };

  render() {
    return (
      <Page {...Meta.tagging}>
        <div className="tagging-page">
          <PageHeading text="Dashboard &#8226; Category Tagging" />
          {this.renderPageHeader()}
          {this.renderPageBody()}
        </div>
      </Page>
    );
  }
}

export default Home;
