import React from "react";
import { Link } from "react-router-dom";
import { pathOr } from "lodash/fp";
import "./tagging.scss";
import Page from "../../components/page";
import Meta from "../../constants/meta";
import PageHeading from "../../components/common/pageHeading";
import LinkButton from "../../components/common/linkButton";
import { Object } from "core-js";

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
    if (
      nextProps.selectedCategory === null &&
      nextProps.categories.length > 0
    ) {
      nextProps.selectCategory(nextProps.categories[0]._id);
    }
  }

  selectCategory = cat => {
    const { selectCategory } = this.props;
    selectCategory(cat._id);
  };

  // Check if Blog has the selected category
  isTagged = blog => {
    const { selectedCategory } = this.props;
    const blogCategories = pathOr(undefined, "category", blog);
    if (!selectedCategory) return false;
    if (blogCategories && blogCategories.length < 1) return false;
    if (blogCategories.includes(selectedCategory.toString())) return true;
    return false;
  };

  mapWithCategory = (isTagged, blog) => {
    const { selectedCategory, updateBlog } = this.props;
    let blogCategories = pathOr([], "category", blog);
    const blogData = { ...blog };
    if (isTagged) {
      blogCategories = blogCategories.filter(
        cat => cat !== selectedCategory.toString()
      );
    } else {
      blogCategories = [...blogCategories, selectedCategory.toString()];
    }
    blogData.category = blogCategories;
    const newBlogFormData = new FormData();
    Object.keys(blogData).map(key => {
      newBlogFormData.append(key, blogData[key]);
      return key;
    });
    updateBlog(newBlogFormData, { blogData });
  };

  renderPageHeader = () => {
    return (
      <div className="page-header">
        <h1>Category - Blog Tagging</h1>
        <LinkButton
          to="/blogs/add"
          className="float-right"
          label="Add New Blog"
        />
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
          categories.map((cat, index) => (
            <>
            <li
              key={cat._id}
              className={selectedCategory === cat._id ? "active" : ""}
              onClick={() => this.selectCategory(cat)}
            >
              {index + 1}. {cat.name}
              {selectedCategory === cat._id && <span className='right-arrow'></span>}
            </li>
            </>
          ))}
      </ul>
    );
  };

  renderBlogs = () => {
    const { blogs } = this.props;
    return (
      <ul className="blogs-list">
        <p>Blogs</p>
        {blogs && blogs.map((blog, index) => this.renderBlogItem(blog, index))}
      </ul>
    );
  };

  renderBlogItem = (blog, index) => {
    const isTagged = this.isTagged(blog);
    const tick = "☑";
    const cross = "☐";
    return (
      <li key={blog._id} className={isTagged ? "active" : ""}>
        <div
          className="tag-status"
          title={isTagged ? "Tagged" : "Not Tagged"}
          onClick={() => this.mapWithCategory(isTagged, blog)}
        >
          {isTagged ? tick : cross}
        </div>
        <Link to={`/blog/${blog._id}`}>
          {index + 1}. {blog.title}
        </Link>
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
