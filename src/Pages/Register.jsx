import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "../Components/Header";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

function Register() {
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(4, "too short")
      .max(6, "too long")
      .required(),
    lastname: Yup.string()
      .min(4, "too short")
      .max(6, "too long")
      .required(),
    email: Yup.string()
      .email("invalid email")
      .required(),
    password: Yup.string()
      .min(6, "too short")
      .max(10, "too long")
      .required(),
    confirmpassword: Yup.string()
      .min(6, "too short")
      .max(10, "too long")
      .required(),

  })
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: "",
      email: "",
      password: '',
      confirmpassword: "",
      city: "",
      address: "",
      contact: ""
    },
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: SignupSchema
  })
  return (
    <>
      <Header />
      <div className='containerdiv'>
        <Form className='registration-form' onSubmit={formik.handleSubmit}>
          <h2>Registration</h2>
          <br></br>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Nmae"
                isInvalid={formik.touched.firstname && formik.errors.firstname}
                name='firstname'
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.firstname}
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name"
                name='lastname'
                isInvalid={formik.touched.lastname && formik.errors.lastname}
                onChange={formik.handleChange}
                value={formik.values.lastname} />
                 <Form.Control.Feedback type="invalid">
                {formik.errors.lastname}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                name='email'
                isInvalid={formik.touched.email && formik.errors.email}
                onChange={formik.handleChange}
                value={formik.values.email} />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
                name='password'
                isInvalid={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
                value={formik.values.password} />
                 <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm your Password"
                name='confirmpassword'
                isInvalid={formik.touched.confirmpassword && formik.errors.confirmpassword}
                onChange={formik.handleChange}
                value={formik.values.confirmpassword} />
                 <Form.Control.Feedback type="invalid">
                {formik.errors.confirmpassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St"
              name='address'
              onChange={formik.handleChange}
              value={formik.values.address} />
          </Form.Group>



          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name='city'
                onChange={formik.handleChange}
                value={formik.values.city}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Contact</Form.Label>
              <Form.Control type='number' placeholder='+92'
                name='contact'
                onChange={formik.handleChange}
                value={formik.values.contact} />
            </Form.Group>
          </Row>
          <br></br>

          <Button className='submitbtn' type="submit">
            Register
          </Button>
          <br></br>
          <br></br>

          <p className='para'>Already have an account <span><Link to='/login'>Login now</Link></span></p>
        </Form>
        
      </div>
    </>
  );
}

export default Register