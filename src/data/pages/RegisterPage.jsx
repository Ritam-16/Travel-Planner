// src/pages/RegisterPage.jsx
import { useState } from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';

export default function RegisterPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationStep, setIsVerificationStep] = useState(false);
  const [error, setError] = useState('');

  if (!isLoaded) return null;

  // Step 1: Create sign-up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      // Send verification email
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setIsVerificationStep(true);
    } catch (err) {
      console.error('Sign-up failed:', err);
      setError(err.errors?.[0]?.message || 'Something went wrong.');
    }
  };

  // Step 2: Verify email
  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        navigate('/');
      } else {
        setError('Verification failed. Please try again.');
      }
    } catch (err) {
      console.error('Verification error:', err);
      setError(err.errors?.[0]?.message || 'Invalid verification code.');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 fw-bold">Create Account</h1>
            <p className="text-muted">Join the adventure!</p>
          </div>

          {!isVerificationStep ? (
            <Form onSubmit={handleSignUp}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="border-0 shadow-sm"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 shadow-sm"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-0 shadow-sm"
                  required
                />
                <Form.Text className="text-muted small">
                  <ul className="mt-2 mb-0 ps-3">
                    <li>At least 8 characters long</li>
                    <li>Include uppercase & lowercase letters</li>
                    <li>Include a number</li>
                    <li>Include a special character (e.g. !, @, #, $)</li>
                  </ul>
                </Form.Text>
              </Form.Group>

              {error && <p className="text-danger small mb-3">{error}</p>}

              <Button variant="success" size="lg" className="w-100 mb-3" type="submit">
                Sign Up
              </Button>

              <div className="text-center">
                <span className="text-muted">Already have an account? </span>
                <Link to="/login" className="text-primary fw-bold text-decoration-none">
                  Sign in
                </Link>
              </div>
            </Form>
          ) : (
            <Form onSubmit={handleVerify}>
              <Form.Group className="mb-3">
                <Form.Label>Verification Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the code sent to your email"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="border-0 shadow-sm"
                  required
                />
              </Form.Group>

              {error && <p className="text-danger small mb-3">{error}</p>}

              <Button variant="primary" size="lg" className="w-100 mb-3" type="submit">
                Verify Email
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
