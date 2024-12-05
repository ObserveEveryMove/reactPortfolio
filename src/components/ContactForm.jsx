import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ui9snlo", //serviceID
        "template_zmun0b5", //templateID
        form.current,
        "A6rg_IbC2omMDPVAA" //Public Key
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          setMessage("Message sent successfully.");
        },
        (error) => {
          console.error("Message sending failed:", error.text);
          setMessage(`Message sending failed: ${error.text}`);
        }
      );
    form.current.reset();
  };
  return (
    <>
    <div className="flex flex-col items-center">

      <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center justify-center">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Email</button>
      </form>
    
        <h1>{message}</h1>
      
    </div>

    </>
  );
};

export default ContactForm;
