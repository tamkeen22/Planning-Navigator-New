(function () {
    class YesNoQuestion extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.qid = this.getAttribute('qid') || '';
            this.text = this.getAttribute('text') || '';
            this.description = this.getAttribute('description') || '';
            this.selected = this.getAttribute('selected') || null;

            this._render();
            this._addListeners();
        }

        _render() {
            const descHtml = this.description ? `<div class="option-desc" style="margin-top: 4px;">${this.description}</div>` : '';

            this.innerHTML = `
        <div class="question-row" style="
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 20px;
          border-bottom: 1px solid var(--border-soft);
          background: #fff;
        ">
          <div class="opt-body" style="padding-left: 0;">
            <div class="option-label" style="font-size: 14px;">${this.text}</div>
            ${descHtml}
          </div>
          <div class="toggle-group" style="
            display: flex; align-items: center; gap: 8px;
            background: var(--slate-light);
            padding: 4px; border-radius: 99px;
            border: 1px solid var(--border-soft);
          ">
            <span class="toggle-label" style="
              font-size: 11px; font-weight: 700; color: var(--slate);
              text-transform: uppercase; letter-spacing: 0.5px;
              margin: 0 6px 0 10px;
            ">Select</span>
            
            <button class="toggle-pill yes ${this.selected === 'yes' ? 'selected' : ''}" data-value="yes" style="
              position: relative;
              background: ${this.selected === 'yes' ? 'var(--navy)' : 'transparent'};
              color: ${this.selected === 'yes' ? '#fff' : 'var(--text)'};
              border: none;
              padding: 6px 18px;
              border-radius: 99px;
              font-size: 13px; font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif;
              cursor: pointer;
              transition: all 0.2s var(--ease-out-expo);
            ">
              <span style="position:relative; z-index:2;">Yes</span>
            </button>
            
            <button class="toggle-pill no ${this.selected === 'no' ? 'selected' : ''}" data-value="no" style="
              position: relative;
              background: ${this.selected === 'no' ? 'var(--navy)' : 'transparent'};
              color: ${this.selected === 'no' ? '#fff' : 'var(--text)'};
              border: none;
              padding: 6px 18px;
              border-radius: 99px;
              font-size: 13px; font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif;
              cursor: pointer;
              transition: all 0.2s var(--ease-out-expo);
            ">
              <span style="position:relative; z-index:2;">No</span>
            </button>
          </div>
        </div>
      `;
        }

        _updateSelection() {
            const yesBtn = this.querySelector('.toggle-pill.yes');
            const noBtn = this.querySelector('.toggle-pill.no');

            if (this.selected === 'yes') {
                yesBtn.style.background = 'var(--navy)';
                yesBtn.style.color = '#fff';
                yesBtn.classList.add('selected');

                noBtn.style.background = 'transparent';
                noBtn.style.color = 'var(--text)';
                noBtn.classList.remove('selected');
            } else if (this.selected === 'no') {
                noBtn.style.background = 'var(--navy)';
                noBtn.style.color = '#fff';
                noBtn.classList.add('selected');

                yesBtn.style.background = 'transparent';
                yesBtn.style.color = 'var(--text)';
                yesBtn.classList.remove('selected');
            } else {
                yesBtn.style.background = 'transparent';
                yesBtn.style.color = 'var(--text)';
                yesBtn.classList.remove('selected');

                noBtn.style.background = 'transparent';
                noBtn.style.color = 'var(--text)';
                noBtn.classList.remove('selected');
            }
        }

        _addListeners() {
            const btns = this.querySelectorAll('.toggle-pill');
            btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const value = btn.dataset.value;

                    if (this.selected === value) {
                        this.selected = null;
                        this.removeAttribute('selected');
                    } else {
                        this.selected = value;
                        this.setAttribute('selected', value);
                    }

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

    customElements.define('yes-no-question', YesNoQuestion);
})();
