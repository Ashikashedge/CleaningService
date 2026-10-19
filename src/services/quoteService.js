const endpoint = process.env.REACT_APP_QUOTE_API_URL;

/**
 * Sends an enquiry to the endpoint configured in REACT_APP_QUOTE_API_URL.
 * Expected request: POST application/json with the quote form fields. The
 * service should return a 2xx status (and may return { success: true }).
 */
export async function submitQuote(payload) {
  if (!endpoint) {
    throw new Error('The enquiry form is not connected yet. Please use the contact details on this page to get in touch.');
  }

  let response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    throw new Error('We could not reach the enquiry service. Please check your connection or contact us directly.');
  }

  let result = null;
  if (response.status !== 204) {
    try {
      result = await response.json();
    } catch (error) {
      result = null;
    }
  }

  if (!response.ok || result?.success === false) {
    throw new Error(result?.message || 'Your enquiry could not be sent. Please try again or contact us directly.');
  }

  return result;
}
