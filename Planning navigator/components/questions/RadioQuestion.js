(function () {
    class RadioQuestion extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.qid = this.getAttribute('qid') || '';

            try {
                this.optionsList = JSON.parse(this.getAttribute('options')) || [];
            } catch (e) {
                this.optionsList = [];
                console.error("Failed to parse options JSON in radio-question for QID", this.qid);
            }

            this.selectedValue = this.getAttribute('selected') || null;

            this._render();
            this._addListeners();
        }

        _render() {
            const optionsHtml = this.optionsList.map((opt, index) => {
                const isSelected = this.selectedValue === opt.value;
                const animClass = `anim-row-${(index % 5) + 1}`;

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
              <!-- Radio styling: Override border-radius to 50% to make it a circle -->
              <div class="option-check" style="border-radius: 50%;">
                <div class="radio-dot" style="width: 8px; height: 8px; border-radius: 50%; background: white; transform: scale(${isSelected ? 1 : 0}); transition: transform 0.25s var(--ease-spring);"></div>
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
                    if (e.target.closest('.option-info-btn')) return;
                    e.preventDefault();
                    const value = item.dataset.value;

                    if (this.selectedValue !== value) {
                        // Deselect previous
                        if (this.selectedValue) {
                            const prev = this.querySelector(`.option-item[data-value="${this.selectedValue}"]`);
                            if (prev) {
                                prev.classList.remove('selected');
                                const dot = prev.querySelector('.radio-dot');
                                if (dot) dot.style.transform = 'scale(0)';
                            }
                        }

                        // Select new
                        this.selectedValue = value;
                        item.classList.add('selected');
                        const newDot = item.querySelector('.radio-dot');
                        if (newDot) newDot.style.transform = 'scale(1)';

                        this.setAttribute('selected', value);

                        this.dispatchEvent(new CustomEvent('answer-selected', {
                            bubbles: true,
                            composed: true,
                            detail: {
                                qid: this.qid,
                                value: this.selectedValue
                            }
                        }));
                    }
                });
            });
        }
    }

    customElements.define('radio-question', RadioQuestion);
})();
