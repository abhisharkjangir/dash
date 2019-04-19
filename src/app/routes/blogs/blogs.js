import React from "react";
import { toast } from 'react-toastify';
import Page from "../../components/page";
import "./blogs.scss";
import Meta from "../../constants/meta";
import Form from "../../components/common/form";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import LinkButton from "../../components/common/linkButton";
import Separator from "../../components/common/separator";
import { blogs } from "./blogsService";
import { setLocalStorage } from "../../utils/common";
import PageHeading from "../../components/common/pageHeading";

class Login extends React.Component {

  componentWillMount() {
    this.fetchBlogs();
  }

  fetchBlogs = () =>{
    const { data, fetchBlogs, fetchBlogsSuccess, fetchBlogsError} = this.props;
    if(!data.length) {
      fetchBlogs();
      blogs().then(res => {
        if(res.data.success){
          fetchBlogsSuccess(res.data.data)
        } else {
          fetchBlogsError(res.data.message);
          toast.error(res.data.message);
        }
      })
      .catch(err => {
        fetchBlogsError(err);
      })
    }
  }

  renderBlogsTable = () => {
    const  { data, isFetching } = this.props;

    if(isFetching) {
      return (<div>Loding...</div>)
    }


  }

  render(){
    return (
      <Page {...Meta.blogs}>
        <div className='blogs-page'>
          <PageHeading text='Blogs' />
          {this.renderBlogsTable()}
        </div>
      </Page>
    )
  }
}

export default Login;
