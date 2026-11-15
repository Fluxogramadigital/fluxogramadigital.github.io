(() => {
  const config = window.EVENT_LINKS || {};
  const connect = (elementId, value, {download = false, external = false} = {}) => {
    const link = document.getElementById(elementId);
    if (!link || !value || typeof value !== 'string') return false;
    // Only normal HTTP(S) links and relative file paths are accepted.
    if (!/^(https?:\/\/|(?:\.\.?\/)?[\w./%-]+(?:\?[\w=&%-]+)?)$/i.test(value)) return false;
    link.href = value;
    link.classList.remove('is-unavailable');
    link.removeAttribute('aria-disabled');
    link.removeAttribute('tabindex');
    if (external || /^https?:\/\//i.test(value)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else if (download) {
      link.setAttribute('download', '');
    }
    return true;
  };
  const registrationReady = connect('registration-link', config.registrationUrl, { external: true });
  const gpxReady = connect('gpx-link', config.gpxUrl, { download: true });
  const kmlReady = connect('kml-link', config.kmlUrl, { download: true });
  if (registrationReady) document.getElementById('registration-status').textContent = 'Inscrições disponíveis';
  if (gpxReady || kmlReady) {
    document.getElementById('tracks-status').textContent = gpxReady && kmlReady ? 'Escolhe o formato pretendido' : 'Formato disponível para descarregar';
  }
  // Prevent a disabled placeholder from being used as an active link.
  document.querySelectorAll('a.is-unavailable').forEach(a => a.addEventListener('click', e => e.preventDefault()));
})();
