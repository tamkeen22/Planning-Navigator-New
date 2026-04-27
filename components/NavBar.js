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
        <nav class="top-nav" style="padding: 0 32px; height: 72px;">
          <div class="brand">
            <div class="brand-logo" style="width: 36px; height: 36px; border-radius: 10px; background: white; color: #0c1f38; font-weight: 800; font-size: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">P</div>
            <a href="index.html" style="text-decoration: none;"> <span style="font-family: inherit; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: white;">Planning Navigator</span>
          </div>
          <div class="nav-links" style="gap: 24px;">
            <a href="javascript:void(0)" style="font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.8);">Guidance</a>
            <a href="javascript:void(0)" style="font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.8);">Resources</a>
            <button class="nav-help" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 8px 20px; border-radius: 99px; color: white; font-weight: 700;">Help</button>
          </div>
        </nav>
      `;
    }
  }

  customElements.define('nav-bar', NavBar);
})();
