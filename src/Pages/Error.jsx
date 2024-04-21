import React from 'react';
import { Button, Result } from 'antd';
import {Link} from 'react-router-dom';
import Header from '../Components/Header';
const ErrorPage = () => (
  <>
  <Header/>
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to = {"/"}><Button className='btnback'>Back Home</Button></Link>}
  />
  </>
);
export default ErrorPage;