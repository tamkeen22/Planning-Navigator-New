(function () {
  class AccordionQuestion extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.qid = this.getAttribute('qid') || '';
      this.text = this.getAttribute('text') || '';
      this.text = this.getAttribute('text') || '';
      this.description = this.getAttribute('description') || '';
      this.value = this.getAttribute('value') || '';
      this.illustration = this.getAttribute('illustration') || '';

      this.selected = this.hasAttribute('selected') || false;
      // When selected, it's expanded by default
      this.isExpanded = this.selected || this.hasAttribute('expanded') || false;

      this._render();
      this._addListeners();
    }

    _render() {
      // Use explicit illustration if provided, otherwise fallback to global getOptionIcon
      let iconSvg = '';
      if (!this.illustration && window.getOptionIcon) {
        iconSvg = window.getOptionIcon(this.text, this.value) || '';
      }
      const descHtml = this.description ? `<div class="option-desc">${this.description}</div>` : '';

      // Capture provided light DOM children before overwriting innerHTML
      const contentNodes = Array.from(this.childNodes).filter(node =>
        !(node.nodeType === 1 && node.classList.contains('accordion-container'))
      );

      this.innerHTML = `
        <div class="accordion-container" style="
          border: 1.5px solid var(--border-soft);
          border-radius: 12px;
          background: var(--slate-light);
          overflow: hidden;
          margin-bottom: 6px;
          transition: border-color 0.22s var(--ease-out-expo),
                      background 0.22s var(--ease-out-expo),
                      box-shadow 0.22s var(--ease-out-expo);
        ">
          <!-- Parent Toggle Row acts as a selectable option-item -->
          <div class="accordion-header ${this.selected ? 'selected' : ''}" style="
            display: flex; align-items: stretch;
            cursor: pointer;
            position: relative;
          ">
            <div class="opt-illus">
              ${iconSvg}
            </div>
            <div class="opt-body">
              <div class="option-label">${this.text}</div>
              ${descHtml}
            </div>
            <div class="opt-right" style="padding-right: 20px; gap: 16px; display: flex; align-items: center;">
              <div class="option-info-btn" title="Learn more">?</div>
              <div class="option-check">
                <svg class="check-svg" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="acc-chevron" style="
                font-size: 14px; color: var(--teal); font-weight: bold;
                transition: transform 0.3s var(--ease-spring);
                transform: rotate(${this.isExpanded ? '180deg' : '0deg'});
              ">▼</div>
            </div>
          </div>
          
          <!-- Expandable Body -->
          <div class="accordion-body" style="
            max-height: ${this.isExpanded ? '2000px' : '0'};
            opacity: ${this.isExpanded ? '1' : '0'};
            overflow: hidden;
            transition: max-height 0.4s var(--ease-out-expo), opacity 0.35s var(--ease-out-expo);
            border-top: ${this.isExpanded ? '1.5px solid var(--border-soft)' : 'none'};
            background: #f8fafc;
          ">
            <div class="accordion-content" style="padding: 12px 16px; display: flex; flex-direction: column; gap: 8px;">
              <!-- Sub-questions slotted here -->
            </div>
          </div>
        </div>
      `;

      const contentSlot = this.querySelector('.accordion-content');
      contentNodes.forEach(node => contentSlot.appendChild(node));

      if (this.illustration) {
        this._loadIllustration(this.illustration);
      }
    }

    _loadIllustration(src) {
      var illusEl = this.querySelector('.opt-illus');
      if (!illusEl || !src) return;

      // Try registry first (file:// compatible)
      if (window.SVG_ILLUSTRATIONS) {
        var key = src.replace(/^.*\//, '').replace(/\.svg$/, '');
        if (window.SVG_ILLUSTRATIONS[key]) {
          illusEl.innerHTML = window.SVG_ILLUSTRATIONS[key];
          return;
        }
      }

      // Fallback to XHR (works on http/https)
      var xhr = new XMLHttpRequest();
      xhr.open('GET', src, true);
      xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 0) {
          if (illusEl) illusEl.innerHTML = xhr.responseText;
        }
      };
      xhr.send();
    }

    _addListeners() {
      const header = this.querySelector('.accordion-header');
      const body = this.querySelector('.accordion-body');
      const container = this.querySelector('.accordion-container');
      const chevron = this.querySelector('.acc-chevron');

      // Hover effects to mimic option-item
      header.addEventListener('mouseenter', () => {
        if (!this.selected) {
          container.style.borderColor = '#93c5fd';
          container.style.background = '#f5faff';
          container.style.transform = 'translateY(-2px) scale(1.002)';
          container.style.boxShadow = '0 6px 20px rgba(13,116,144,0.1), 0 1px 4px rgba(12,31,56,0.06)';
          container.style.transition = 'all 0.22s var(--ease-spring)';
        }
      });

      header.addEventListener('mouseleave', () => {
        if (!this.selected) {
          container.style.borderColor = 'var(--border-soft)';
          container.style.background = 'var(--slate-light)';
          container.style.transform = 'translateY(0) scale(1)';
          container.style.boxShadow = 'none';
        }
      });

      // Click to toggle selection and expansion
      header.addEventListener('click', (e) => {
        // Ignore if clicking info btn
        if (e.target.closest('.option-info-btn')) return;

        e.preventDefault();
        this.selected = !this.selected;
        this.isExpanded = this.selected; // Expand when selected, collapse when deselected

        if (this.selected) {
          header.classList.add('selected');
          this.setAttribute('selected', 'true');
          body.style.maxHeight = body.scrollHeight + 800 + 'px'; // add buffer for nested elements
          body.style.opacity = '1';
          body.style.borderTop = '1.5px solid var(--border-soft)';
          chevron.style.transform = 'rotate(180deg)';
          container.style.transform = 'translateY(0) scale(1)'; // flatten when open
          container.style.boxShadow = 'none';
          container.style.background = 'var(--slate-light)'; // base color
          container.style.borderColor = 'var(--teal)'; // border remains teal because of selection
        } else {
          header.classList.remove('selected');
          this.removeAttribute('selected');
          body.style.maxHeight = '0';
          body.style.opacity = '0';
          body.style.borderTop = 'none';
          chevron.style.transform = 'rotate(0deg)';
          container.style.borderColor = 'var(--border-soft)';
          // On deselect, emit custom event to clear sub-answers
          this.dispatchEvent(new CustomEvent('accordion-deselected', {
            bubbles: true,
            composed: true,
            detail: { qid: this.qid }
          }));
        }

        // Emit answer-selected event to mimic option-row behavior
        this.dispatchEvent(new CustomEvent('answer-selected', {
          bubbles: true,
          composed: true,
          detail: {
            qid: this.qid,
            value: this.selected ? ['yes'] : []
          }
        }));
      });
    }
  }

  customElements.define('accordion-question', AccordionQuestion);
})();
