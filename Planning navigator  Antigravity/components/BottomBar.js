/**
 * <bottom-bar> — Frosted-glass footer with progress counter, pip dots, and Back/Continue buttons
 *
 * Usage:
 *   <bottom-bar></bottom-bar>
 *
 * API:
 *   element.updateProgress(current, total)  — updates the counter text and regenerates pip dots
 *   element.setContinueEnabled(bool)        — enables or disables the Continue button
 *   element.nextBtn                         — reference to the Continue button element
 *   element.backBtn                         — reference to the Back button element
 */
(function () {
  class BottomBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="sticky-footer">
          <div class="sticky-footer-left" id="stepHint">
            <span class="footer-counter">Question <span id="questionIndex">1</span> of <span id="questionTotal">1</span></span>
            <div class="pip-row" id="pipRow"></div>
          </div>
          <div class="sticky-footer-actions">
            <button class="btn-back" id="backBtn">← Back</button>
            <button class="btn-continue" id="nextBtn" disabled>
              <span>Continue</span> <span class="arr">→</span>
            </button>
          </div>
        </div>
      `;
    }

    /** @returns {HTMLButtonElement} */
    get nextBtn() {
      return this.querySelector('#nextBtn');
    }

    /** @returns {HTMLButtonElement} */
    get backBtn() {
      return this.querySelector('#backBtn');
    }

    /**
     * Update the question counter and pip dots
     * @param {number} current — current question number (1-based)
     * @param {number} total   — total number of questions
     */
    updateProgress(current, total) {
      var indexEl = this.querySelector('#questionIndex');
      var totalEl = this.querySelector('#questionTotal');
      var pipRow = this.querySelector('#pipRow');

      if (indexEl) indexEl.textContent = current;
      if (totalEl) totalEl.textContent = total;

      if (pipRow) {
        var html = '';
        for (var i = 1; i <= total; i++) {
          if (i < current) html += '<div class="pip done"></div>';
          else if (i === current) html += '<div class="pip active"></div>';
          else html += '<div class="pip"></div>';
        }
        pipRow.innerHTML = html;
      }
    }

    /**
     * Enable or disable the Continue button
     * @param {boolean} enabled
     */
    setContinueEnabled(enabled) {
      var btn = this.nextBtn;
      if (btn) btn.disabled = !enabled;
    }
  }

  customElements.define('bottom-bar', BottomBar);
})();
