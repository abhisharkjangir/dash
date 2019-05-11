import React from "react";
import "./tagging.scss";
import Page from "../../components/page";
import Meta from "../../constants/meta";
import PageHeading from "../../components/common/pageHeading";
import { Row, Col } from "../../components/layout";
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPageHeader = () => {
    return (
      <div className="page-header">
        <h1>Category - Blog Tagging</h1>
      </div>
    );
  };

  renderPageBody = () => {
    return (
      <div className='page-body'>
        <Row>
          {this.renderCategories()}
          <Col lg={9}>Blogs</Col>
        </Row>
      </div>
    )
  }

  renderCategories = () => {
    const { categories } = this.props;
    return (
      <Col lg={3}>
        <ul className='category-list'>
          {categories && categories.map(cat => <li key={cat._id}>{cat.name}</li>)}
        </ul>
      </Col>
    );
  }

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
