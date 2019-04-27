import React from "react";
import Page from "../../components/page";
import Meta from "../../constants/meta";

class AddBlog extends React.PureComponent {
  render() {
    return (
      <Page {...Meta.addBlog}>
        <div className="add-blog-page">


        </div>
      </Page>
    );
  }
}

export default AddBlog;
