/** Keyboard skip-to-content link. First focusable element on the page. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-card focus:bg-jaipur-maroon focus:px-4 focus:py-2 focus:text-jaipur-white focus:outline-none focus:ring-2 focus:ring-jaipur-saffron"
    >
      मुख्य सामग्री पर जाएँ
    </a>
  );
}
