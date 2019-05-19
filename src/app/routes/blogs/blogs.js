import React from "react";
import QueryString from "query-string";

import _ from "lodash";
import { pathOr } from "lodash/fp";
import Page from "../../components/page";
import "./blogs.scss";
import Meta from "../../constants/meta";
import Form from "../../components/common/form";
import Input from "../../components/common/input";
import LinkButton from "../../components/common/linkButton";
import {
  findValueById,
  cleanObject,
  processQueryParams
} from "../../utils/common";
import PageHeading from "../../components/common/pageHeading";
import { TRENDING, FEATURED, PUBLISHED_BY } from "../../constants";
import { Row, Col, ContainerFluid } from "../../components/layout";
import Select from "../../components/common/select";
import MultiSelectTag from "../../components/common/multiSelectTag";
import ConfirmationModal from "../../components/common/confirmationModal";
import { toast } from "react-toastify";

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationModal: {
        isOpen: false
      }
    };
    this.TABLE_COLUMNS = [
      {
        name: "Title",
        key: "title",
        getValue: blog => (
          <LinkButton
            className="d-block"
            label={blog.title}
            to={`/blog/${blog._id}`}
          />
        )
      },
      {
        name: "Author",
        key: "author",
        getValue: blog => blog.author
      },
      {
        name: "Trending",
        key: "isTrending",
        getValue: blog => findValueById(TRENDING, blog.isTrending)
      },
      {
        name: "Featured",
        key: "isFeatured",
        getValue: blog => findValueById(FEATURED, blog.isFeatured)
      },
      {
        name: "Views",
        key: "viewsCount",
        getValue: blog => blog.viewsCount
      },
      {
        name: "Published By",
        key: "publishedBy",
        getValue: blog => findValueById(PUBLISHED_BY, blog.publishedBy)
      },
      {
        name: "Action",
        key: "publishedBy",
        getValue: blog => (
          <>
            <LinkButton
              to={`/blog/edit/${blog._id}`}
              label="Edit"
              className="edit"
            />
            <span className="delete" onClick={() => this.deleteBlog(blog)}>
              Delete
            </span>
          </>
        )
      }
    ];
    this.PUBLISHED_BY_OPTIONS = [{ name: "All", id: "" }, ...PUBLISHED_BY];
    this.FEATURED_OPTIONS = [{ name: "All", id: "" }, ...FEATURED];
    this.TRENDING_OPTIONS = [{ name: "All", id: "" }, ...TRENDING];
    this.filterDebounce = _.debounce(this.fetchBlogs, 600);
  }

  componentDidMount() {
    this.fetchBlogs();
  }

  getDeleteConfirmation = (response, item) => {
    this.setState({
      confirmationModal: {
        isOpen: false,
        title: undefined,
        message: undefined
      }
    });
    if (response) {
      const blogId = pathOr(null, "_id", item);
      this.props.deleteBlog(blogId);
    }
  };

  deleteBlog = blog => {
    const blogId = pathOr(null, "_id", blog);
    if (blogId) {
      // eslint-disable-next-line no-restricted-globals
      let response = confirm(
        `Are you sure you want to delete "${blog.title}" blog?`
      );
      if (response) {
        this.props.deleteBlog(blogId);
      }
    }
  };

  fetchBlogs = () => {
    const {
      fetchBlogs,
      updateFilters,
      location,
      filters,
      history
    } = this.props;
    let payload = processQueryParams(location, filters);
    updateFilters(payload);
    history.replace({
      path: location.pathname,
      search: QueryString.stringify(cleanObject(payload))
    });
    fetchBlogs(cleanObject(payload));
  };

  renderBlogsTable = () => {
    const { data, isFetching } = this.props;
    // Show Sekeleton If fetching state
    if (isFetching) {
      const list = [
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""]
      ];
      return (
        <>
          {list.map((l, i) => (
            <div key={i} className="table-skeleton">
              {l.map((l2, i2) => (
                <div key={i2} />
              ))}
            </div>
          ))}
        </>
      );
    }
    if (!isFetching && data.length > 0) {
      return (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {this.TABLE_COLUMNS.map((col, index) => (
                  <th key={index}>{col.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(blog => (
                <tr key={blog._id}>
                  {this.TABLE_COLUMNS.map((col, index) => (
                    <td key={index}>{col.getValue(blog)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  onChangeHandler = e => {
    e.preventDefault();
    const { updateFilters, history, filters, location } = this.props;
    let name, value;
    // To handle MultiSelectTag Change
    if (e.type === "multiSelectOption") {
      name = e.detail.name;
      value = e.detail.value;
    } else {
      name = e.target.name;
      value = e.target.value;
    }
    const filter = {
      [name]: value
    };
    const payload = { ...filters, ...filter };
    updateFilters(payload);
    history.replace({
      path: location.pathname,
      search: QueryString.stringify(cleanObject(payload))
    });
    this.filterDebounce();
  };

  addCategory = () => {
    const name = prompt("Enter Category Name *");
    if (name && name.length > 0) {
      this.props.addCategory({ name });
    } else toast.error("Please enter a valid category name.");
  };

  renderFilterMessage = () => {
    const { data, isFetching } = this.props;
    let message;
    if (isFetching) {
      message = "Loading... Please wait.";
    } else {
      if (data && data.length) {
        message = `Showing ${data.length} result(s)`;
      } else {
        message = `Sorry, no data found.`;
      }
    }

    return (
      <Row>
        <Col>
          <div className="message">{message}</div>
        </Col>
      </Row>
    );
  };

  renderFilterView = () => {
    const { filters, categories } = this.props;
    const { title, isFeatured, isTrending, category } = filters;
    return (
      <div className="filter-view">
        <Form autoComplete="off" onSubmit={this.onChangeHandler}>
          <ContainerFluid>
            <Row>
              <Col xs={12} sm={6} lg={6}>
                <Input
                  id="title"
                  name="title"
                  value={title}
                  onChange={this.onChangeHandler}
                  label="SEARCH BLOGS BY NAME/CATEGORY"
                />
              </Col>
              <Col xs={12} sm={3} lg={3}>
                <Select
                  id="isTrending"
                  name="isTrending"
                  value={isTrending}
                  onChange={this.onChangeHandler}
                  label="TRENDING"
                  options={this.TRENDING_OPTIONS}
                />
              </Col>
              <Col xs={12} sm={3} lg={3}>
                <Select
                  id="isFeatured"
                  name="isFeatured"
                  value={isFeatured}
                  onChange={this.onChangeHandler}
                  label="FEATURED"
                  options={this.FEATURED_OPTIONS}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={12}>
                <MultiSelectTag
                  id="category"
                  uniqueKey="_id"
                  name="category"
                  value={category}
                  onChange={this.onChangeHandler}
                  label="CATEGORY"
                  options={categories}
                  addNewItem={this.addCategory}
                />
              </Col>
            </Row>
            {this.renderFilterMessage()}
          </ContainerFluid>
        </Form>
      </div>
    );
  };

  renderPageHeader = () => {
    return (
      <div className="page-header">
        <h1>Blogs</h1>
        <LinkButton to="/blogs/add" label="Add New Blog" />
      </div>
    );
  };

  render() {
    const { confirmationModal } = this.state;
    return (
      <Page {...Meta.blogs}>
        <div className="blogs-page">
          <PageHeading text="Dashboard &#8226; Blogs" />
          {this.renderPageHeader()}
          {this.renderFilterView()}
          {this.renderBlogsTable()}
          <ConfirmationModal
            {...confirmationModal}
            onClose={this.getDeleteConfirmation}
          />
        </div>
      </Page>
    );
  }
}

export default Blogs;
