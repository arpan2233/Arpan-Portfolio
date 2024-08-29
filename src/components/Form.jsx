import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xjkblwzg");
  if (state.succeeded) {
      return <section className='form-section'>
        <div><h2>Message Sent!</h2></div>
      </section>;
  }
  return (
    <section className='form-section'>
        <h2>Write to Me!</h2>
            <div className='form-div'>
                <form onSubmit={handleSubmit} className='form'>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Email Address'
                    className='form-style'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder='Write your Message here'
                    className='form-style'
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} className='submit-button'>
                    Send
                </button>
                </form>
            </div>
        </section>
  );
}
export default ContactForm;