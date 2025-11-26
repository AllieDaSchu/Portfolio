import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const ContactForm = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs.sendForm('service_3x1iffp', 'template_38akpdh', form.current, {
            publicKey: 'EBUiMnM5pWtjDdZSi',
        })
        .then (
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };
    return (
        <div className="py-[40px] px-[20px]">
        <div className=" m-auto px-[25px] py-[50px] max-w-[1000px] w-[100%] shadow-all-over rounded-lg">
            <h2 className="text-4xl text-center merriweather-regular pb-[20px]">Want to Know More? Contact Me!</h2>
            <p className="raleway-regular text-center pb-[20px]">Email: <a className="underline text-blue-700 hover:text-blue-800" href="mailto:aschuliger@gmail.com">aschuliger@gmail.com</a></p>
            <form ref={form} onSubmit={sendEmail} className="max-w-[800px] w-[100%] m-auto">
                <div className="flex flex-col sm:flex-row justify-between pb-[20px]">
                    <div className="flex flex-col w-[100%] pb-[10px] sm:pb-[0px] sm:w-[45%] raleway-regular">
                        <label htmlFor="name" className="text-md raleway-regular">Name:</label>
                        <input className="bg-gray-100 text-md p-[5px] rounded-sm" type="text" name="name" id="name" required />
                    </div>
                    <div className="flex flex-col w-[100%] sm:w-[45%] raleway-regular">
                        <label htmlFor="email" className="raleway-regular">Email:</label>
                        <input className="bg-gray-100 text-md p-[5px] rounded-sm" type="email" name="email" id="email" required />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="raleway-regular">Message:</label>
                    <textarea className="bg-gray-100 text-md p-[5px] rounded-sm h-[150px] raleway-regular" name="message" id="message" placeholder="Add Message" required />
                </div>
                <button id="submit" type="submit" className="w-[50%] text-center mx-auto block bg-celtic-600 hover:bg-celtic-700 cursor-pointer text-white mt-[20px] p-[5px] rounded-lg">Send Email</button>
            </form>
        </div>
        </div>
    )
}

export default ContactForm;