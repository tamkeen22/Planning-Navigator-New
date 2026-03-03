(function () {
  class QuestionBlock extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.label = this.getAttribute('label') || '';
      this.titleText = this.getAttribute('title') || '';
      this.badge = this.getAttribute('badge') || '';

      // Defer render so DOM parser finishes appending children (when instantiated via innerHTML)
      setTimeout(() => {
        this._render();
      }, 0);
    }

    _render() {
      // Capture existing children first BEFORE modifying innerHTML
      const existingChildren = Array.from(this.childNodes);

      // Create the outer wrapper securely
      const wrapper = document.createElement('div');
      wrapper.className = 'q-block';

      const badgeHtml = this.badge ? `<div class="q-badge">${this.badge}</div>` : '';

      wrapper.innerHTML = `
                <div class="q-header">
                    <div>
                        <div class="q-label">${this.label}</div>
                        <div class="q-title">${this.titleText}</div>
                    </div>
                    ${badgeHtml}
                </div>
                <div class="q-body">
                </div>
            `;

      const bodyContainer = wrapper.querySelector('.q-body');

      // Move previously captured children into the new body
      existingChildren.forEach(node => bodyContainer.appendChild(node));

      // Clear the element and append the new structured wrapper
      this.innerHTML = '';
      this.appendChild(wrapper);
    }
  }

  customElements.define('question-block', QuestionBlock);
})();
