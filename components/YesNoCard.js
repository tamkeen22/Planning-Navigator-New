/**
 * <yes-no-card> — Yes/No toggle card component
 * Matches the premium v5 styling with curved borders, shadows, and teal hover states.
 * Emits 'answer-selected' CustomEvent on click.
 *
 * Usage:
 *   <yes-no-card qid="PT1" question="Are you planning a loft extension?" selected="yes"></yes-no-card>
 */
(function () {
    class YesNoCard extends HTMLElement {
        static get observedAttributes() {
            return ['qid', 'question', 'selected'];
        }

        connectedCallback() {
            this.qid = this.getAttribute('qid') || '';
            this.question = this.getAttribute('question') || '';
            this.selected = this.getAttribute('selected') || null;

            this._render();
            this._addListeners();
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (oldValue !== newValue) {
                this[name] = newValue;
                this._updateSelection();
            }
        }

        _render() {
            this.innerHTML = `
        <div class="question-row">
          <div>
            <div class="question-text">${this.question}</div>
          </div>
          <div class="toggle-group">
            <span class="toggle-label">Select</span>
            <button class="toggle-pill yes ${this.selected === 'yes' ? 'selected' : ''}" data-value="yes">
              <div class="toggle-indicator"></div>
              <span>Yes</span>
            </button>
            <button class="toggle-pill no ${this.selected === 'no' ? 'selected' : ''}" data-value="no">
              <div class="toggle-indicator"></div>
              <span>No</span>
            </button>
          </div>
        </div>
      `;
        }

        _updateSelection() {
            const btns = this.querySelectorAll('.toggle-pill');
            btns.forEach(b => {
                if (this.selected && b.dataset.value === this.selected) {
                    b.classList.add('selected');
                } else {
                    b.classList.remove('selected');
                }
            });
        }

        _addListeners() {
            const btns = this.querySelectorAll('.toggle-pill');
            btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const value = btn.dataset.value;

                    // Toggle off if clicking the already selected button
                    if (this.selected === value) {
                        this.selected = null;
                        this.removeAttribute('selected');
                    } else {
                        this.selected = value;
                        this.setAttribute('selected', value);
                    }

                    // Emit event to be picked up by main.js
                    this.dispatchEvent(new CustomEvent('answer-selected', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            qid: this.qid,
                            value: this.selected // 'yes', 'no', or null
                        }
                    }));
                });
            });
        }
    }

    customElements.define('yes-no-card', YesNoCard);
})();
