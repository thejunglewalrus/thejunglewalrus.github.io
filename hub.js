(() => {
  'use strict';
  const search = document.getElementById('tool-search');
  const region = document.getElementById('region-filter');
  const buttons = [...document.querySelectorAll('[data-category]')];
  const sections = [...document.querySelectorAll('main > section')];
  const entries = sections.flatMap(section => [...section.querySelectorAll('article.card')].map(card => ({
    card,
    section,
    category: section.id === 'translations' ? 'translations' : 'tools',
    region: card.dataset.region || 'global',
    text: card.textContent.toLocaleLowerCase()
  })));
  const count = document.getElementById('result-count');
  const empty = document.getElementById('empty-state');
  let category = 'all';

  function render() {
    const words = search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const entry of entries) {
      const matches = (category === 'all' || entry.category === category)
        && (region.value === 'all' || entry.region === region.value)
        && words.every(word => entry.text.includes(word));
      entry.card.hidden = !matches;
      if (matches) visible++;
    }
    for (const section of sections) {
      section.hidden = !entries.some(entry => entry.section === section && !entry.card.hidden);
    }
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
    count.textContent = `${visible} ${visible === 1 ? 'result' : 'results'}`;
    empty.hidden = visible !== 0;
  }

  search.addEventListener('input', render);
  region.addEventListener('change', render);
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.category;
    render();
  }));
  document.getElementById('reset-filters').addEventListener('click', () => {
    category = 'all'; search.value = ''; region.value = 'all'; render(); search.focus();
  });
  // A translation jump should work even after the directory has been filtered.
  function followTranslationAnchor() {
    if (location.hash !== '#translations') return;
    category = 'translations'; search.value = ''; region.value = 'all'; render();
    document.getElementById('translations').scrollIntoView();
  }
  window.addEventListener('hashchange', followTranslationAnchor);
  document.querySelector('.hero-note a').addEventListener('click', () => {
    category = 'translations'; search.value = ''; region.value = 'all'; render();
  });
  document.getElementById('directory-controls').hidden = false;
  render();
  followTranslationAnchor();
})();
