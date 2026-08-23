// Progressive-enhancement handler for Buttondown embed forms.
//
// Without JS the form is a plain POST to Buttondown's embed-subscribe
// endpoint (a full-page navigation to their confirmation screen). With JS we
// intercept, submit in the background, and swap in an inline confirmation so
// the reader never leaves the page. Buttondown uses double opt-in, so success
// means "check your inbox", not "you're subscribed".
//
// The embed-subscribe endpoint is a plain form target, not a CORS-enabled API,
// so we submit with `mode: "no-cors"`. The response is opaque — we can't read
// its status — so we treat a completed request as success and only surface an
// error if the network request itself throws.

const CONFIRM_MESSAGE = "Almost there — check your inbox to confirm.";
const ERROR_MESSAGE = "Something went wrong. Please try again.";

function wire(form: HTMLFormElement) {
  const status = form.querySelector<HTMLElement>("[data-newsletter-status]");
  const button = form.querySelector<HTMLButtonElement>("button[type='submit']");
  const emailInput = form.querySelector<HTMLInputElement>("input[type='email']");

  form.addEventListener("submit", async (event) => {
    if (!emailInput || !form.action) return; // fall back to native submit
    if (!form.reportValidity()) return;

    event.preventDefault();

    const originalLabel = button?.textContent ?? "";
    if (button) {
      button.disabled = true;
      button.textContent = "Subscribing…";
    }
    if (status) status.textContent = "";

    try {
      await fetch(form.action, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({ email: emailInput.value }),
      });

      form.reset();
      if (status) {
        status.textContent = CONFIRM_MESSAGE;
        status.dataset.state = "success";
      }
      if (button) button.textContent = "Subscribed ✓";
    } catch {
      if (status) {
        status.textContent = ERROR_MESSAGE;
        status.dataset.state = "error";
      }
      if (button) {
        button.disabled = false;
        button.textContent = originalLabel;
      }
    }
  });
}

document
  .querySelectorAll<HTMLFormElement>("form[data-newsletter]")
  .forEach(wire);
