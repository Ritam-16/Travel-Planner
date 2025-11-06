// src/assets/components/GoogleTranslate.jsx
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // ✅ Always reset Google Translate cookie to English
    document.cookie = `googtrans=/en/en; path=/; domain=${window.location.hostname}`;

    // If already added, don't add script again
    if (document.querySelector("#google-translate-script")) return;

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // ✅ Define callback safely
    window.googleTranslateElementInit = () => {
      if (
        window.google &&
        window.google.translate &&
        !document.querySelector(".goog-te-gadget")
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,as",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        display: "inline-block",
      }}
    />
  );
}
