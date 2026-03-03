/**
 * <nav-bar> — Top navigation bar component
 * Dark navy bar with brand logo and navigation links.
 *
 * Usage:
 *   <nav-bar></nav-bar>
 */
(function () {
  class NavBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="top-nav">
          <div class="brand">
            <div class="brand-logo">🧭</div>
            <span>Planning Navigator</span>
          </div>
          <div class="nav-links">
            <a href="javascript:void(0)">Guidance</a>
            <a href="javascript:void(0)">Resources</a>
            <a href="javascript:void(0)">Contact</a>
            <button class="nav-help">Help</button>
          </div>
        </nav>
      `;
    }
  }

  customElements.define('nav-bar', NavBar);
})();
