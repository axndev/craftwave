<div data-fs-success></div>
<div data-fs-error></div>

<form id="my-form">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" data-fs-field />
  <span data-fs-error="email"></span>

  <label for="message">Message</label>
  <textarea id="message" name="message" data-fs-field></textarea>
  <span data-fs-error="message"></span>

  <button type="submit" data-fs-submit-btn>Send</button>
</form>

<script>
  window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
  formspree('initForm', { formElement: '#my-form', formId: 'mkjjkogk' });
</script>
<script src="https://unpkg.com/@formspree/ajax@1" defer></script>