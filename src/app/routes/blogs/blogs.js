import React from "react";
import { toast } from "react-toastify";
import QueryString from "query-string";
import _ from "lodash";
import Page from "../../components/page";
import "./blogs.scss";
import Meta from "../../constants/meta";
import Form from "../../components/common/form";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import LinkButton from "../../components/common/linkButton";
import Separator from "../../components/common/separator";
import {
  setLocalStorage,
  findValueById,
  cleanObject,
  processQueryParams
} from "../../utils/common";
import PageHeading from "../../components/common/pageHeading";
import { TRENDING, FEATURED, PUBLISHED_BY } from "../../constants";
import Icon from "../../components/common/Icon";
import { Row, Col, ContainerFluid } from "../../components/layout";
import Checkbox from "../../components/common/checkbox";
import Select from "../../components/common/select";

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.TABLE_COLUMNS = [
      {
        name: "Title",
        key: "title",
        getValue: blog => (
          <LinkButton
            className="d-block"
            label={blog.title}
            to={`/story/${blog._id}`}
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
        name: "",
        key: "publishedBy",
        getValue: blog => (
          <div>
            <Icon name="close" className="d-inline-block fs-14" />
          </div>
        )
      }
    ];
    this.PUBLISHED_BY_OPTIONS = [{ name: "All", id: "" }, ...PUBLISHED_BY];
    this.FEATURED_OPTIONS = [{ name: "All", id: "" }, ...FEATURED];
    this.TRENDING_OPTIONS = [{ name: "All", id: "" }, ...TRENDING];
    this.filterDebounce = _.debounce(this.fetchBlogs, 600);
  }

  componentWillMount() {
    this.fetchBlogs();
  }

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
    if (isFetching) {
      const list = ["", "", "", "", "", ""];
      return (
        <>
          {list.map((l, i) => (
            <div key={i} className="table-skeleton">
              {list.map((l2, i2) => (
                <div key={i2} />
              ))}
            </div>
          ))}
        </>
      );
    }
    if (!isFetching && data.length === 0) {
      return <div>No Data Found</div>;
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
    let name = e.target.name;
    let value = e.target.value;
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

  renderFilterView = () => {
    const { filters } = this.props;
    console.log(this.props);

    const { title, isFeatured, isTrending } = filters;
    return (
      <div className="filter-view">
        <Form autoComplete="off" onSubmit={this.onChangeHandler}>
          <ContainerFluid>
            <Row>
              <Col xs={12} lg={6}>
                <Input
                  id="title"
                  name="title"
                  value={title}
                  onChange={this.onChangeHandler}
                  label="SEARCH BLOGS BY NAME/CATEGORY"
                />
              </Col>
              <Col xs={12} lg={2}>
                <Select
                  id="isTrending"
                  name="isTrending"
                  value={isTrending}
                  onChange={this.onChangeHandler}
                  label="TRENDING"
                  options={this.TRENDING_OPTIONS}
                />
              </Col>
              <Col xs={12} lg={2}>
                <Select
                  id="isFeatured"
                  name="isFeatured"
                  value={isFeatured}
                  onChange={this.onChangeHandler}
                  label="FEATURED"
                  options={this.FEATURED_OPTIONS}
                />
              </Col>
              <Col xs={12} lg={2}>
                <Select
                  id="categories"
                  name="categories"
                  value={isFeatured}
                  onChange={this.onChangeHandler}
                  label="FEATURED"
                  options={this.FEATURED_OPTIONS}
                />
              </Col>
            </Row>
          </ContainerFluid>
        </Form>
      </div>
    );
  };

  render() {
    return (
      <Page {...Meta.blogs}>
        <div className="blogs-page">
          <PageHeading text="Dashboard &#8226; Blogs" />
          {this.renderFilterView()}
          {this.renderBlogsTable()}
        </div>
      </Page>
    );
  }
}

export default Blogs;
