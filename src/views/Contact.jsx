import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ui9snlo", //serviceID
        "template_zmun0b5", //templateID
        form.current,
        "A6rg_IbC2omMDPVAA"//Public Key
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
        },
        (error) => {
          console.error("Message sending failed:", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default Contact;
