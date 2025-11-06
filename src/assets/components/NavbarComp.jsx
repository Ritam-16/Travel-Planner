import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useAuth, UserButton } from "@clerk/clerk-react";
import { useEffect } from "react";

export default function NavbarComp() {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    // Prevent multiple script injections
    if (!document.querySelector("#google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);
    }

    // Only initialize once
    window.googleTranslateElementInit = () => {
      if (!document.querySelector(".goog-te-gadget")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,as",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        {/* Left: Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-primary">
          TravelPlanner
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* CENTER LINKS */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#planner">Plan Trip</Nav.Link>
          </Nav>

          {/* RIGHT SIDE */}
          <Nav className="align-items-center">
            {/* 🌍 Google Translate Dropdown */}
            <div id="google_translate_element" className="me-3"></div>

            {!isSignedIn ? (
              <Button as={Link} to="/login" variant="outline-primary" size="sm">
                <i className="bi bi-person me-1"></i> Login
              </Button>
            ) : (
              <div className="ms-2">
                <UserButton afterSignOutUrl="/login" />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
