(function () {
    class CheckboxQuestion extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.qid = this.getAttribute('qid') || '';

            try {
                this.optionsList = JSON.parse(this.getAttribute('options')) || [];
            } catch (e) {
                this.optionsList = [];
                console.error("Failed to parse options JSON in checkbox-question for QID", this.qid);
            }

            try {
                const selAttr = this.getAttribute('selected');
                this.selectedValues = selAttr ? JSON.parse(selAttr) : [];
            } catch (e) {
                this.selectedValues = [];
            }

            this._render();
            this._addListeners();
        }

        _render() {
            const optionsHtml = this.optionsList.map((opt, index) => {
                const isSelected = this.selectedValues.includes(opt.value);
                // stagger animation index
                const animClass = `anim-row-${(index % 5) + 1}`;

                // try to get icon from global SVG registry
                const iconSvg = window.getOptionIcon ? window.getOptionIcon(opt.text, opt.value) : '';
                const descHtml = opt.description ? `<div class="option-desc">${opt.description}</div>` : '';

                return `
          <div class="option-item ${animClass} ${isSelected ? 'selected' : ''}" data-value="${opt.value}">
            <div class="opt-illus">
              ${iconSvg}
            </div>
            <div class="opt-body">
              <div class="option-label">${opt.text}</div>
              ${descHtml}
            </div>
            <div class="opt-right">
              <div class="option-info-btn" title="Learn more">?</div>
              <div class="option-check">
                <svg class="check-svg" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        `;
            }).join('');

            this.innerHTML = `
        <div class="options-list">
          ${optionsHtml}
        </div>
      `;
        }

        _addListeners() {
            const items = this.querySelectorAll('.option-item');
            items.forEach(item => {
                item.addEventListener('click', (e) => {
                    // ignore if clicking the info button
                    if (e.target.closest('.option-info-btn')) return;

                    e.preventDefault();
                    const value = item.dataset.value;

                    if (this.selectedValues.includes(value)) {
                        item.classList.remove('selected');
                        this.selectedValues = this.selectedValues.filter(v => v !== value);
                    } else {
                        item.classList.add('selected');
                        this.selectedValues.push(value);
                    }

                    this.setAttribute('selected', JSON.stringify(this.selectedValues));

                    this.dispatchEvent(new CustomEvent('answer-selected', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            qid: this.qid,
                            value: this.selectedValues
                        }
                    }));
                });
            });
        }
    }

    customElements.define('checkbox-question', CheckboxQuestion);
})();
