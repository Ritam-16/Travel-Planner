// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useSignIn } from '@clerk/clerk-react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

export default function LoginPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [resetMode, setResetMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();

  if (!isLoaded) return null;

  // ✅ Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const result = await signIn.create({
        identifier: email,
        password,
        strategy: 'password',
      });

      if (result.status === 'complete') {
        // Clerk handles session persistence internally.
        await setActive({ session: result.createdSessionId });
        navigate('/');
      }
    } catch (err) {
      setError(err.errors?.[0]?.message || 'Invalid credentials');
    }
  };

  // ✅ Handle Forgot Password Request
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');
    setResetSent(false);

    try {
      await signIn.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      });
      setResetSent(true);
    } catch (err) {
      setError(err.errors?.[0]?.message || 'Error sending reset email');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 fw-bold">
              {resetMode ? 'Reset Password' : 'Sign In'}
            </h1>
            <p className="text-muted">
              {resetMode
                ? 'Enter your email to receive a password reset link'
                : 'Welcome back to your travel journey!'}
            </p>
          </div>

          {error && <Alert variant="danger">{error}</Alert>}
          {resetSent && <Alert variant="success">Reset email sent! Check your inbox.</Alert>}

          {/* --- Login Form --- */}
          {!resetMode ? (
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="border-0 shadow-sm"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="border-0 shadow-sm"
                />
              </Form.Group>

              {/* Remember Me + Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <Button
                  variant="link"
                  className="p-0 text-decoration-none"
                  onClick={() => setResetMode(true)}
                >
                  Forgot password?
                </Button>
              </div>

              <Button variant="primary" size="lg" type="submit" className="w-100 mb-3">
                Sign In
              </Button>

              <div className="text-center">
                <span className="text-muted">Don't have an account? </span>
                <Link to="/register" className="text-primary fw-bold text-decoration-none">
                  Sign Up
                </Link>
              </div>
            </Form>
          ) : (
            /* --- Reset Password Form --- */
            <Form onSubmit={handlePasswordReset}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="border-0 shadow-sm"
                />
              </Form.Group>

              <Button variant="success" size="lg" type="submit" className="w-100 mb-3">
                Send Reset Link
              </Button>

              <div className="text-center">
                <Button
                  variant="link"
                  className="text-decoration-none"
                  onClick={() => {
                    setResetMode(false);
                    setResetSent(false);
                  }}
                >
                  Back to login
                </Button>
              </div>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
