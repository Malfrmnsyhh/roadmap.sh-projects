document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('cookieConsent')) {
    document.getElementById('cookiesConsent').style.display = 'block';
  }
});

document.getElementById('acceptCookies').addEventListener('click', function() {
  localStorage.setItem('cookieConsent', 'true');
  document.getElementById('cookiesConsent').style.display = 'none';
})

document.getElementById('closeCookies').addEventListener('click', function() {
  document.getElementById('cookiesConsent').style.display = 'none';
})