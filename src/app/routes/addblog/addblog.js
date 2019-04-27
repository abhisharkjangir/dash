import React from "react";
import "./addBlog.scss";
import Page from "../../components/page";
import Meta from "../../constants/meta";
import PageHeading from "../../components/common/pageHeading";
import { Row, Col } from "../../components/layout";
import Input from "../../components/common/input";
import MultiSelectTag from "../../components/common/multiSelectTag";
import Select from "../../components/common/select";
import QuillEditor from "../../components/common/quillEditor";
import FileBrowser from "../../components/common/fileBrowser";
import Form from "../../components/common/form";

class AddBlog extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: "",
        author: "",
        isPublished: 1,
        isTrending: 0,
        isFeatured: 0,
        image: "",
        imageSrc: "",
        keywords: "",
        story: "",
        viewsCount: 0,
        category: [],
        sharedCount: 0,
        // "tags": [],
        createdDate: new Date(),
        updatedDate: new Date(),
        publishedDate: new Date(),
        publishedBy: 0
      }
    };
  }

  onChangeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    let { formData } = this.state;
    formData[name] = value;
    this.setState({formData});
  }

  renderPageHeader = () => {
    return (
      <div className="page-header">
        <h1>Add New Blog</h1>
      </div>
    );
  };

  renderBlogForm = () => {
    const { categories } = this.props;
    const { formData } = this.state;
    const {
      title,
      author,
      isPublished,
      isFeatured,
      keywords,
      story,
      category,
      publishedBy,
      image,
      imageSrc
    } = formData;

    return (
      <div className="blog-form">
        <Form>
          <Row>
            <Col xs={12} lg={3}>
              <Input
                id="title"
                value={title}
                onChange={this.onChangeHandler}
                name="title"
                label="Title"
              />
            </Col>
            <Col xs={12} lg={3}>
              <Input
                id="author"
                value={author}
                onChange={this.onChangeHandler}
                name="author"
                label="author"
              />
            </Col>

            <Col xs={12} lg={6}>
              <Input
                id="keywords"
                value={keywords}
                onChange={this.onChangeHandler}
                name="keywords"
                label="keywords"
              />
            </Col>
            <Col xs={12} lg={6}>
              <FileBrowser label="Image" />
            </Col>

            <Col xs={12} lg={6}>
              <MultiSelectTag
                label="CATEGORY"
                uniqueKey="_id"
                value={[]}
                options={categories.data}
              />
            </Col>
            <Col xs={12} lg={12}>
              <QuillEditor
                value=""
                label="Content"
                onChange={this.onChangeHandler}
              />
            </Col>
            <Col xs={12} lg={3}>
              <Select
                id="isFeatured"
                name="isFeatured"
                onChange={this.onChangeHandler}
                label="Publish Status"
                options={this.FEATURED_OPTIONS}
              />
            </Col>
            <Col xs={12} lg={3}>
              <Select
                id="isFeatured"
                name="isFeatured"
                onChange={this.onChangeHandler}
                label="Publish By"
                options={this.FEATURED_OPTIONS}
              />
            </Col>
            <Col xs={12} lg={3}>
              <Select
                id="isFeatured"
                name="isFeatured"
                onChange={this.onChangeHandler}
                label="Trending"
                options={this.FEATURED_OPTIONS}
              />
            </Col>
            <Col xs={12} lg={3}>
              <Select
                id="isFeatured"
                name="isFeatured"
                onChange={this.onChangeHandler}
                label="Featured"
                options={this.FEATURED_OPTIONS}
              />
            </Col>
          </Row>
        </Form>
      </div>
    );
  };

  render() {
    return (
      <Page {...Meta.addBlog}>
        <div className="add-blog-page">
          <PageHeading text="Dashboard &#8226; Blogs &#8226; Add New Blog" />
          {this.renderPageHeader()}
          {this.renderBlogForm()}
        </div>
      </Page>
    );
  }
}

export default AddBlog;
