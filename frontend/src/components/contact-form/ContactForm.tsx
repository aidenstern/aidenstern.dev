import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('xlealknq');
  return (
    <div className="m-0 w-full max-w-md">
      <form className="bg-white mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block font-semibold text-gray-900 text-md"
            htmlFor="email"
          >
            Email Address
            <input
              className="shadow appearance-none border w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
            />
          </label>

          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-2">
          <label
            className="block font-semibold text-gray-900 text-md"
            htmlFor="message"
          >
            Message
            <textarea
              className="shadow appearance-none border w-full mt-2 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
            />
          </label>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        {state.succeeded ? (
          <p>Thanks!</p>
        ) : (
          <button
            className="text-gray-900 font-semibold hover:text-black hover:underline"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
