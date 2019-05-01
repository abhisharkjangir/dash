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
import Button from "../../components/common/button";
import { PUBLISH, PUBLISHED_BY, FEATURED, TRENDING } from "../../constants";
import { toast } from "react-toastify";

class AddBlog extends React.PureComponent {
  onChangeHandler = e => {
    let name, value;
    const { updateFormData } = this.props;
    if (e.type === "multiSelectOption" || e.type === "QuillEditorChange") {
      name = e.detail.name;
      value = e.detail.value;
    } else if (e.target.files) {
      value = e.target.files[0];
      name = e.target.name;
    } else {
      value = e.target.value;
      name = e.target.name;
    }
    updateFormData({ [name]: value });
  };

  renderPageHeader = () => {
    return (
      <div className="page-header">
        <h1>Add New Blog</h1>
      </div>
    );
  };

  renderBlogForm = () => {
    const { categories, isAdding, formData } = this.props;
    const {
      title,
      author,
      keywords,
      image,
      category,
      isPublished,
      isFeatured,
      story,
      publishedBy,
      isTrending
    } = formData;

    return (
      <div className="blog-form">
        <Form onSubmit={this.addBlog}>
          <Row>
            <Col xs={12} sm={3} lg={3}>
              <Input
                id="title"
                value={title}
                onChange={this.onChangeHandler}
                name="title"
                label="Title"
              />
            </Col>
            <Col xs={12} sm={3} lg={3}>
              <Input
                id="author"
                value={author}
                onChange={this.onChangeHandler}
                name="author"
                label="author"
              />
            </Col>

            <Col xs={12} sm={6} lg={6}>
              <Input
                id="keywords"
                value={keywords}
                onChange={this.onChangeHandler}
                name="keywords"
                label="keywords"
              />
            </Col>
            <Col xs={12} sm={6} lg={6}>
              <FileBrowser
                id="image"
                label="Image"
                selectedImage={image}
                name="image"
                accept="image/*"
                onChange={this.onChangeHandler}
              />
            </Col>
            <Col xs={12} sm={6} lg={6}>
              <MultiSelectTag
                label="CATEGORY"
                uniqueKey="_id"
                value={category}
                name="category"
                onChange={this.onChangeHandler}
                options={categories.data}
              />
            </Col>
            <Col xs={12} lg={12}>
              <QuillEditor
                value={story}
                name="story"
                label="Content"
                onChange={this.onChangeHandler}
              />
            </Col>
            <Col xs={12} lg={3}>
              <Select
                id="isPublished"
                name="isPublished"
                value={isPublished}
                onChange={this.onChangeHandler}
                label="Publish Status"
                options={PUBLISH}
              />
            </Col>
            <Col xs={12} lg={3}>
              <Select
                id="publishedBy"
                name="publishedBy"
                value={publishedBy}
                onChange={this.onChangeHandler}
                label="Publish By"
                options={PUBLISHED_BY}
              />
            </Col>
            <Col xs={12} lg={3}>
              <Select
                id="isFeatured"
                name="isFeatured"
                value={isFeatured}
                onChange={this.onChangeHandler}
                label="Featured"
                options={FEATURED}
              />
            </Col>
            <Col xs={12} lg={3}>
              <Select
                id="isTrending"
                value={isTrending}
                name="isTrending"
                onChange={this.onChangeHandler}
                label="Trending"
                options={TRENDING}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={4} />
            <Col lg={4}>
              <Button
                label="Add Blog"
                onClick={this.addBlog}
                disabled={isAdding}
              />
            </Col>
            <Col lg={4} />
          </Row>
        </Form>
      </div>
    );
  };

  addBlog = e => {
    e.preventDefault();
    const { addBlog, formData } = this.props;
    const blog = formData;
    let isFormInvalid = false;
    Object.keys(blog).forEach(key => {
      if (
        (blog[key] === "" || (blog[key] && blog[key].length === 0)) &&
        key !== "imageSrc"
      ) {
        if (!isFormInvalid) {
          toast.error(`${key.toLocaleUpperCase()} is invalid!`);
        }
        isFormInvalid = true;
      }
    });
    if (isFormInvalid) return;
    let blogFormData = new FormData();
    Object.keys(blog).forEach(key => {
      blogFormData.append(key, blog[key]);
    });
    addBlog(blogFormData);
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
