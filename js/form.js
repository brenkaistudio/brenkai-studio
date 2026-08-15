/* Contact form: client-side validation + async submit to Web3Forms.
   Progressive: without JS the <form> still POSTs natively to the same
   endpoint, so the form keeps working. */

const form = document.querySelector('[data-form]');

if (form) {
  const status = form.querySelector('[data-form-status]');
  const submit = form.querySelector('[data-form-submit]');
  const submitText = submit ? submit.querySelector('span') : null;
  const original = submitText ? submitText.textContent : '';

  const fields = Array.from(form.querySelectorAll('[data-validate]'));

  const setError = (input, message) => {
    const box = form.querySelector(`#${input.id}-error`);
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (box) box.textContent = message;
    return !message;
  };

  const validate = (input) => {
    const value = input.value.trim();

    if (!value) {
      return setError(input, `${input.dataset.label} is required.`);
    }
    if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      return setError(input, 'Enter a valid email address.');
    }
    return setError(input, '');
  };

  /* Only re-validate on blur once the field has been touched, so the user
     isn't yelled at while still typing the first character. */
  fields.forEach((input) => {
    input.addEventListener('blur', () => validate(input));
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') validate(input);
    });
  });

  const setStatus = (message, kind) => {
    if (!status) return;
    status.textContent = message;
    status.className = 'form__status' + (kind ? ` form__status--${kind}` : '');
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const results = fields.map(validate);
    if (results.includes(false)) {
      setStatus('Please fix the fields marked above.', 'err');
      const firstBad = fields.find((i) => i.getAttribute('aria-invalid') === 'true');
      if (firstBad) firstBad.focus();
      return;
    }

    /* Honeypot: a bot fills every field it finds. */
    if (form.querySelector('[name="botcheck"]').checked) return;

    if (submit) submit.disabled = true;
    if (submitText) submitText.textContent = 'Sending';
    setStatus('Sending your message…');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error(String(response.status));

      form.reset();
      setStatus(
        'Thanks — your message is in. We read every one personally and will get back to you.',
        'ok'
      );
    } catch (error) {
      setStatus(
        'Something went wrong sending that. Please email brenkaistudio@gmail.com directly.',
        'err'
      );
    } finally {
      if (submit) submit.disabled = false;
      if (submitText) submitText.textContent = original;
    }
  });
}
