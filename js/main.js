/* Bola Motors Parts - site script (no tracking, no third-party calls) */
(function () {
  'use strict';
  var QUOTE_EMAIL = 'josephweng58@gmail.com';

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Footer year
  var y = document.querySelectorAll('[data-year]');
  for (var i = 0; i < y.length; i++) y[i].textContent = new Date().getFullYear();

  // Quote form -> pre-filled mailto
  var form = document.getElementById('quote-form');
  if (!form) return;
  var status = document.getElementById('form-status');

  function val(id) { var el = form.elements[id]; return el ? el.value.trim() : ''; }
  function setErr(id, msg) {
    var el = form.elements[id], err = document.getElementById(id + '-err');
    if (!el) return;
    if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
    if (err) err.textContent = msg || '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var errors = [];
    var checks = [
      ['name', 'Please enter your name.'],
      ['phone', 'Please enter a phone number.'],
      ['vehicle', 'Please enter the vehicle make and model.'],
      ['part', 'Please enter a part number or description.']
    ];
    checks.forEach(function (c) {
      if (!val(c[0])) { setErr(c[0], c[1]); errors.push(c[0]); } else setErr(c[0], '');
    });
    var email = val('email');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr('email', 'Please check the email address.'); errors.push('email'); }
    else setErr('email', '');
    var qty = val('quantity');
    if (qty && !(parseInt(qty, 10) >= 1)) { setErr('quantity', 'Quantity must be 1 or more.'); errors.push('quantity'); }
    else setErr('quantity', '');

    if (errors.length) {
      status.textContent = 'Please fix the highlighted fields.';
      form.elements[errors[0]].focus();
      return;
    }

    var subject = 'Quote request: ' + val('vehicle') + (val('company') ? ' - ' + val('company') : '');
    var lines = [
      'Hello Bola Motors Parts,',
      '',
      'Please quote for the following part(s):',
      '',
      'Name: ' + val('name'),
      'Company: ' + (val('company') || '-'),
      'Phone: ' + val('phone'),
      'Email: ' + (email || '-'),
      'Vehicle make / model: ' + val('vehicle'),
      'Part number / description: ' + val('part'),
      'Quantity: ' + (qty || '-'),
      '',
      'Message:',
      val('message') || '-',
      '',
      'Sent from the Bola Motors Parts website quote form.'
    ];
    var href = 'mailto:' + QUOTE_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(lines.join('\r\n'));
    status.textContent = 'Opening your email app with your quote request. Please press send in your email app to submit it.';
    window.location.href = href;
  });
})();
