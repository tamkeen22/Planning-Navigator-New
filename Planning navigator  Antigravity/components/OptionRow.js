/**
 * <option-row> — Selectable option item with SVG illustration
 * Renders a v5-style option card with illustration panel, text body, info button, and checkbox.
 *
 * Attributes:
 *   label        — Bold label text
 *   description  — Description text below the label
 *   illustration — Path to an SVG file (e.g. "components/illustrations/listed-building.svg")
 *   qid          — Question ID for data binding
 *   guidance     — Optional guidance text shown in a callout when selected
 *   selected     — Boolean attribute; if present, the item starts selected
 *
 * Events:
 *   'option-toggle' — Dispatched on click with { detail: { qid, selected } }
 *
 * Usage:
 *   <option-row
 *     label="Listed building"
 *     description="Your property is officially recognised..."
 *     illustration="components/illustrations/listed-building.svg"
 *     qid="LG1"
 *     guidance="Permitted Development rights do not apply..."
 *   ></option-row>
 */
(function () {
    class OptionRow extends HTMLElement {
        static get observedAttributes() {
            return ['selected'];
        }

        constructor() {
            super();
            this._rendered = false;
        }

        connectedCallback() {
            if (!this._rendered) {
                this._render();
                this._rendered = true;
            }
        }

        attributeChangedCallback(name) {
            if (name === 'selected' && this._rendered) {
                this._updateSelectedState();
            }
        }

        /** Whether this option is currently selected */
        get selected() {
            return this.hasAttribute('selected');
        }

        set selected(val) {
            if (val) this.setAttribute('selected', '');
            else this.removeAttribute('selected');
        }

        _render() {
            var self = this;
            var label = this.getAttribute('label') || '';
            var desc = this.getAttribute('description') || '';
            var illus = this.getAttribute('illustration') || '';
            var qid = this.getAttribute('qid') || '';
            var guidance = this.getAttribute('guidance') || '';
            var isSelected = this.hasAttribute('selected');

            // Build the option-item wrapper
            this.classList.add('option-item');
            if (isSelected) this.classList.add('selected');
            if (!illus) this.classList.add('no-illus');
            this.dataset.qid = qid;

            const illusHtml = illus ? '<div class="opt-illus" data-src="' + illus + '"></div>' : '';

            this.innerHTML =
                illusHtml +
                '<div class="opt-body">' +
                '<div class="option-label">' + label + '</div>' +
                '<div class="option-desc">' + desc + '</div>' +
                '</div>' +
                '<div class="opt-right">' +
                '<div class="option-info-btn" title="' + guidance + '">?</div>' +
                '<div class="option-check">' +
                '<svg class="check-svg" viewBox="0 0 12 12" fill="none">' +
                '<path d="M2.5 6l2.5 2.5 4.5-5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg>' +
                '</div>' +
                '</div>';

            // Load the SVG illustration
            if (illus) {
                this._loadIllustration(illus);
            }

            // Click handler — toggle selected state and dispatch event
            this.addEventListener('click', function (e) {
                // Don't trigger on info button click
                if (e.target.closest('.option-info-btn')) return;

                self.selected = !self.selected;

                self.dispatchEvent(new CustomEvent('option-toggle', {
                    bubbles: true,
                    detail: { qid: self.dataset.qid, selected: self.selected }
                }));
            });
        }

        /**
     * Load SVG into the illustration panel.
     * First checks window.SVG_ILLUSTRATIONS registry (works on file://),
     * then falls back to XHR for http/https.
     */
        _loadIllustration(src) {
            var illusEl = this.querySelector('.opt-illus');
            if (!illusEl) return;

            // Try registry first (file:// compatible)
            if (window.SVG_ILLUSTRATIONS) {
                // Extract key from path: "components/illustrations/listed-building.svg" → "listed-building"
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
            xhr.onerror = function () {
                console.warn('[OptionRow] Failed to load illustration: ' + src);
            };
            xhr.send();
        }

        _updateSelectedState() {
            if (this.selected) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        }
    }

    customElements.define('option-row', OptionRow);
})();
