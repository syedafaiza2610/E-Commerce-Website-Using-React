import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "../Components/Header"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Header/>
      <div className='containerdiv1'>
    <Form className='registration-form'>
      <h2>Login</h2>
     
      
      <Row className='mb-3'>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Row>
       

      <br></br>

      <Button className='submitbtn' type="submit">
        Login
      </Button>
      <br></br>
          <br></br>

          <p className='para'>Don't have an account?<span><Link to='/register'>Register now</Link></span></p>
    </Form>
    </div>
    </>
  );
}

export default Login