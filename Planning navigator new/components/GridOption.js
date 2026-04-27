/**
 * <grid-option> — Grid-style option card component
 * Handles questions with multiple visual options. Emits 'answer-selected' custom event.
 * Re-uses the getOptionIcon logic from the main file for SVG injection.
 * 
 * Usage:
 *   <grid-option qid="EXT" question="What are you proposing to build?" options='[{"text":"Single storey","value":"PT2"},...]' selected="PT2"></grid-option>
 */

(function () {
    class GridOptionCard extends HTMLElement {
        static get observedAttributes() {
            return ['qid', 'question', 'options', 'selected'];
        }

        connectedCallback() {
            this.qid = this.getAttribute('qid') || '';
            this.question = this.getAttribute('question') || '';

            try {
                this.optionsList = JSON.parse(this.getAttribute('options')) || [];
            } catch (e) {
                this.optionsList = [];
                console.error("Failed to parse options JSON in grid-option for QID", this.qid);
            }

            this.selected = this.getAttribute('selected') || null;

            this._render();
            this._addListeners();
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (oldValue !== newValue) {
                if (name === 'options') {
                    try {
                        this.optionsList = JSON.parse(newValue) || [];
                    } catch (e) {
                        this.optionsList = [];
                    }
                    this._render();
                    this._addListeners();
                } else {
                    this[name] = newValue;
                    if (name === 'selected') {
                        this._updateSelection();
                    }
                }
            }
        }

        _render() {
            const optionsHtml = this.optionsList.map(opt => {
                const isSelected = this.selected === opt.value;
                const iconSvg = window.getOptionIcon ? window.getOptionIcon(opt.text, opt.value) : '';

                return `
            <div class="visual-option-card ${isSelected ? 'selected' : ''}" data-value="${opt.value}" data-qid="${this.qid}">
                <div class="visual-option-icon">${iconSvg}</div>
                <div class="visual-option-radio"></div>
                <div class="visual-option-label">${opt.text}</div>
            </div>
        `;
            }).join('');

            this.innerHTML = `
        <div class="question-text" style="font-size: 24px; font-weight: 700; color: #4B4B4B; margin-bottom: 32px; text-align: center;">
            ${this.question}
        </div>
        <div class="visual-options-grid">
            ${optionsHtml}
        </div>
      `;
        }

        _updateSelection() {
            const cards = this.querySelectorAll('.visual-option-card');
            cards.forEach(c => {
                if (this.selected && c.dataset.value === this.selected) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            });
        }

        _addListeners() {
            const cards = this.querySelectorAll('.visual-option-card');
            cards.forEach(card => {
                card.addEventListener('click', (e) => {
                    e.preventDefault();

                    const value = card.dataset.value;

                    if (this.selected === value) {
                        return;
                    }

                    this.selected = value;
                    this.setAttribute('selected', value);
                    this._updateSelection();

                    this.dispatchEvent(new CustomEvent('answer-selected', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            qid: this.qid,
                            value: this.selected
                        }
                    }));
                });
            });
        }
    }

    customElements.define('grid-option-card', GridOptionCard);
})();
