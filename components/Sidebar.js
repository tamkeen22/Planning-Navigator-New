/**
 * <side-bar> — Sidebar journey steps + help card component
 * White card with 4 numbered step items and a navy help card.
 *
 * Usage:
 *   <side-bar></side-bar>
 *
 * API:
 *   element.updateStep(stepName) — highlights the active step and marks prior steps as done
 *     stepName: 'location' | 'project' | 'site' | 'detail'
 */
(function () {
  const STEPS = [
    { key: 'location', id: 'stepLocation', title: 'Location & Property', sub: 'Property & location constraints' },
    { key: 'project', id: 'stepProject', title: 'Project Questions', sub: 'What you\'re planning to do' },
    { key: 'detail', id: 'stepDetail', title: 'Your Project Features', sub: 'Extensions, conversions & works' },
    { key: 'site', id: 'stepSite', title: 'Site Checks', sub: 'Constraints on your site' }
  ];

  class SideBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <aside class="sidebar">
          <div class="sidebar-card anim-1">
            <div class="sc-head">YOUR PROGRESS</div>
            ${STEPS.map((s, i) => `
              <div class="sc-step${i === 0 ? ' active' : ''}" id="${s.id}">
                <div class="scd">${i + 1}</div>
                <div>
                  <div class="sc-label">${s.title}</div>
                  <div class="sc-sub">${s.sub}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="sidebar-help anim-1">
            <h4 style="font-size: 14px; margin-bottom: 8px;">Need more help?</h4>
            <p style="font-size: 13px; margin-bottom: 16px;">Our Interactive House tool is a visual way to see what's possible.</p>
            <a class="sh-btn" href="javascript:void(0)" style="padding: 12px; border-radius: 12px; font-size: 13px;">Visit Interactive House →</a>
          </div>
        </aside>
      `;
    }

    /**
     * Update step indicators — highlights the active step, marks prior steps as done.
     * @param {string} stepName — one of 'location', 'project', 'site', 'detail'
     */
    updateStep(stepName) {
      const order = STEPS.map(s => s.key);
      const currentIdx = order.indexOf(stepName);

      STEPS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        el.classList.remove('active', 'done', 'completed');
        if (i === currentIdx) el.classList.add('active');
        else if (i < currentIdx) el.classList.add('done');
      });
    }
  }

  customElements.define('side-bar', SideBar);
})();
