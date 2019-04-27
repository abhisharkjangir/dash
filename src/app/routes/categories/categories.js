import React from "react";
import QueryString from "query-string";
import Page from "../../components/page";
import "./categories.scss";
import Meta from "../../constants/meta";
import Form from "../../components/common/form";
import Input from "../../components/common/input";
import { cleanObject } from "../../utils/common";
import PageHeading from "../../components/common/pageHeading";
import { Row, Col, ContainerFluid } from "../../components/layout";
import Button from "../../components/common/button";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.TABLE_COLUMNS = [
      {
        name: "S No",
        key: "_id",
        getValue: (category, rowIndex) => rowIndex + 1
      },
      {
        name: "Cat ID",
        key: "_id",
        getValue: category => category._id
      },
      {
        name: "Name",
        key: "name",
        getValue: category => category.name
      },
      {
        name: "Action",
        key: "publishedBy",
        getValue: blog => (
          <>
            <span className="edit" onClick={() => this.deleteBlog(blog)}>
              Edit
            </span>
            <span className="delete" onClick={() => this.deleteBlog(blog)}>
              Delete
            </span>
          </>
        )
      }
    ];
  }

  componentWillMount() {
    this.props.fetchCategory();
  }

  renderBlogsTable = () => {
    const { data, isFetching } = this.props;

    if (isFetching) {
      const list = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
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
              {data.map((row, rowIndex) => (
                <tr key={row._id}>
                  {this.TABLE_COLUMNS.map((col, index) => (
                    <td key={index}>{col.getValue(row, rowIndex)}</td>
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
    const { filters } = this.props;
    const { title } = filters;
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
        <h1>Categories</h1>
        <Button label="Add New Category" />
      </div>
    );
  };

  render() {
    return (
      <Page {...Meta.blogs}>
        <div className="categories-page">
          <PageHeading text="Dashboard &#8226; Categories" />
          {this.renderPageHeader()}
          {this.renderBlogsTable()}
        </div>
      </Page>
    );
  }
}

export default Categories;
