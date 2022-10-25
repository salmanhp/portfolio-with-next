import Image from "next/image";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


        form.current[0].value = '';
        form.current[1].value = '';
        form.current[2].value = '';

        toast.success('Thank You For Contacting Me !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <div className="contact mx-8 mt-16 mb-16" id="Contact Me">
            <h1 className="text-center mb-10 font-semibold text-4xl md:text-5xl lg:text-6xl">Take A Coffee & Chat With Me</h1>
            <div className="contact-info flex flex-col md:flex-row lg:flex-row justify-center space-y-3 md:space-y-0 lg:space-y-0 space-x-0 md:space-x-8 lg:space-x-8">

                <a className="flex items-center justify-center space-x-2 md:space-x-4 lg:space-x-4 bg-red-100 w-full md:w-80 lg:w-80 px-1 md:px-0 lg:px-0 py-2 rounded-md" href="mailto:peadasalman1819@gmail.com">
                    <Image src="/email.png" alt="email" width="35" height="35" />
                    <p className="text-slate-900">peadasalman1819@gmail.com</p>
                </a>

                <a className="flex items-center justify-center space-x-4 bg-blue-100 w-full md:w-80 lg:w-80 py-2 rounded-md" href="tel:+91 8617873420">
                    <Image src="/mobile.png" alt="mobile" width="35" height="35" />
                    <p className="text-slate-900">8617873420</p>
                </a>

            </div>

            <div className="contact-form flex justify-center mt-12">
                <form className="space-y-6 w-full md:w-full lg:w-3/5" ref={form} onSubmit={sendEmail}>

                    <div>
                        <input
                            required className="w-full py-2 px-4 outline-none rounded-md text-slate-900 bg-slate-200"
                            type="text"
                            name="user_name"
                            minLength="2"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <input
                            required
                            className="w-full py-2 px-4 outline-none rounded-md text-slate-900 bg-slate-200"
                            type="email"
                            name="user_email"
                            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                            title="Email should be Valid"
                            minLength="5"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <textarea
                            required
                            className="w-full py-2 px-4 outline-none rounded-md text-slate-900 bg-slate-200"
                            rows={5}
                            name="message"
                            minLength="5"
                            placeholder="Your Message"
                        />
                    </div>

                    <div className="text-center">
                        <button className="bg-green-500 hover:bg-green-400 text-white px-6 shadow-md py-2 rounded-md" type="submit">Send Message</button>
                        <ToastContainer />
                    </div>

                </form>
            </div>


        </div>
    )
}
