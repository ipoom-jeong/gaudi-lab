(() => {
  const query = document.getElementById('publication-search');
  const year = document.getElementById('publication-year');
  if (!query || !year) return;

  const rows = [...document.querySelectorAll('#publication-list .filter-item')];
  const tabs = [...document.querySelectorAll('.publication-tabs [role="tab"]')];
  const selectedTiers = new Set(['top-tier', 'major', 'scie']);
  const panel = document.getElementById('publication-panel');
  const readView = () => new URL(window.location.href).searchParams.get('view') === 'all' ? 'all' : 'selected';
  let view = readView();

  function filter() {
    const terms = query.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const visible = [];
    for (const row of rows) {
      row.hidden = (view === 'selected' && !selectedTiers.has(row.dataset.tier))
        || !terms.every(term => row.dataset.search.includes(term))
        || (year.value !== '' && row.dataset.year !== year.value);
      row.classList.remove('last-visible');
      if (!row.hidden) visible.push(row);
    }
    visible.at(-1)?.classList.add('last-visible');
    document.getElementById('results').textContent = `${visible.length} publication${visible.length === 1 ? '' : 's'}`;
    document.getElementById('empty').hidden = visible.length !== 0;
  }

  function showView(nextView) {
    view = nextView;
    for (const tab of tabs) {
      const active = tab.dataset.view === view;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active) panel.setAttribute('aria-labelledby', tab.id);
    }
    filter();
  }

  function activate(tab) {
    if (tab.dataset.view !== view) {
      const url = new URL(window.location.href);
      url.searchParams.set('view', tab.dataset.view);
      window.history.pushState(null, '', url);
    }
    showView(tab.dataset.view);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      activate(tab);
    });
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = tabs[(index + 1) % tabs.length];
      if (event.key === 'ArrowLeft') target = tabs[(index - 1 + tabs.length) % tabs.length];
      if (event.key === 'Home') target = tabs[0];
      if (event.key === 'End') target = tabs.at(-1);
      if (event.key === ' ') target = tab;
      if (!target) return;
      event.preventDefault();
      target.focus();
      activate(target);
    });
  });
  query.addEventListener('input', filter);
  year.addEventListener('change', filter);
  window.addEventListener('popstate', () => showView(readView()));
  showView(view);
})();
