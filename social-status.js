(() => {
  'use strict';
  const status = document.getElementById('twitch-status');
  if (!status) return;

  // DecAPI proxies public Twitch data without exposing an API secret on Pages.
  // A numeric viewer count (including zero) confirms a live stream. The service
  // may also return errors as HTTP 200 text, so never treat arbitrary text as live.
  const endpoint = 'https://decapi.me/twitch/viewercount/thejunglewalrus';
  const refreshMs = 60000;
  let inFlight = false;

  function render(state) {
    status.dataset.state = state;
    const label = state === 'live' ? 'Live Now' : state === 'offline' ? 'Offline' : 'Watch channel';
    if (status.textContent !== label) status.textContent = label;
    status.title = state === 'unknown' ? 'Open Twitch to check stream status' : 'Stream status via DecAPI; updates may take a few minutes';
  }

  async function refresh() {
    if (document.hidden || inFlight) return;
    inFlight = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(endpoint, {
        signal: controller.signal,
        cache: 'no-store',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
      });
      if (!response.ok) throw new Error('Status unavailable');
      const text = (await response.text()).trim();
      if (/^\d+$/.test(text)) render('live');
      else if (/^thejunglewalrus is offline\.?$/i.test(text)) render('offline');
      else render('unknown');
    } catch {
      // Clear any previous live state when a check fails; all links still work.
      render('unknown');
    } finally {
      clearTimeout(timeout);
      inFlight = false;
    }
  }

  refresh();
  setInterval(refresh, refreshMs);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) render('unknown');
    else refresh();
  });
})();
