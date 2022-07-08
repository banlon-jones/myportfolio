import React from 'react';
import { useForm } from 'react-hook-form';
import { send } from '@emailjs/browser';
import emailKeys from '../../emailKeys';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line max-len
    send(emailKeys.SERVICE_ID, emailKeys.TEMPLATE_ID, { ...data, ...{ reply_to: data.email } }, emailKeys.PUBLIC_KEY).then((response) => {
      console.log(response);
      alert('Thanks Email sent');
    }, (errors) => {
      console.log(errors);
      alert('Email send Failed...');
    });
  };
  return (
    <div>
      <div className="container text-white">
        <div>
          <div>
            <h3> Contact me </h3>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="p-2"> Name </div>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <input type="text" id="name" className="form-control" {...register('from_name', { required: true })} />
                {errors.from_name && <span className="text-danger">name is required</span>}
              </div>
              <div>
                <div className="p-2"> Email </div>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <input type="text" className="form-control" {...register('email', { required: true })} />
                {errors.email && <span className="text-danger">Email is required</span>}
              </div>
              <div>
                <div className="p-2"> Your Message </div>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <textarea className="form-control" cols="30" rows="10" {...register('message', { required: true })} />
                {errors.message && <span className="text-danger">Message is required</span>}
              </div>
              <br />
              <div>
                <button type="submit" className="btn btn-lg btn-danger"> Send Message </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
