import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoLogin from "../../assets/images/auth/login-bg.jpg";

const Login = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center auth mt-4">
        <div className="row mx-0">
          <div className="col-lg-4 ">
            <div className="card auth-form-light p-3 text-left  px-sm-5 rounded-4">
              <div className="brand-logo d-flex justify-content-center">
                <img src={logoLogin} alt="logo" />
              </div>
              <h4>Hello! {`let's`} get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <Form className="pt-3">
                <Form.Group className="d-flex search-field pb-2">
                  <Form.Control
                    type="email"
                    placeholder="Username"
                    size="lg"
                    className="h-auto"
                  />
                </Form.Group>
                <Form.Group className="d-flex search-field pt-1">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    size="lg"
                    className="h-auto"
                  />
                </Form.Group>
                <div className="mt-3 d-flex justify-content-center">
                  <Link
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    to="/dashboard"
                  >
                    SIGN IN
                  </Link>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div>
                  <a
                    href="!#"
                    onClick={(event) => event.preventDefault()}
                    className="auth-link text-black"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mb-2">
                  <button
                    type="button"
                    className="btn btn-block btn-facebook auth-form-btn"
                  >
                    <i className="mdi mdi-facebook mr-2"></i>Connect using
                    facebook
                  </button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  {`Don't`} have an account?{" "}
                  <Link to="/user-pages/register" className="text-primary">
                    Create
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
