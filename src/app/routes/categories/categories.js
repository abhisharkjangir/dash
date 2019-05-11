import React from "react";
import Page from "../../components/page";
import "./categories.scss";
import Meta from "../../constants/meta";
import PageHeading from "../../components/common/pageHeading";
import Button from "../../components/common/button";
import { toast } from "react-toastify";

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
        name: "",
        key: "publishedBy",
        getValue: category => (
          <span
            className="delete"
            onClick={() => this.deleteCategory(category)}
          >
            Delete
          </span>
        )
      }
    ];
  }

  componentWillMount() {
    this.props.fetchCategory();
  }

  deleteCategory = category => {
    // eslint-disable-next-line no-restricted-globals
    let confirmation = confirm(
      `Are you sure you want to delete "${category.name}" blog?`
    );
    if (confirmation) {
      this.props.deleteCategory(category._id);
    }
  };

  editCategory = category => {};

  addCategory = () => {
    const name = prompt("Enter Category Name *");
    if (name && name.length > 0) {
      this.props.addCategory({ name });
    } else toast.error("Please enter a valid category name.");
  };

  renderCategoriesTable = () => {
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

  renderPageHeader = () => {
    return (
      <div className="page-header">
        <h1>Categories</h1>
        <Button onClick={this.addCategory} label="Add New Category" />
      </div>
    );
  };

  render() {
    return (
      <Page {...Meta.blogs}>
        <div className="categories-page">
          <PageHeading text="Dashboard &#8226; Categories" />
          {this.renderPageHeader()}
          {this.renderCategoriesTable()}
        </div>
      </Page>
    );
  }
}

export default Categories;
