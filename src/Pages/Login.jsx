import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "../Components/Header"

function Login() {
  return (
    <>
      <Header/>
      <div className='containerdiv1'>
    <Form className='registration-form'>
      <h2>Login</h2>
      <br></br>
     
      
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
    </Form>
    </div>
    </>
  );
}

export default Login