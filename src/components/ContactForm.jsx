import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";


const ContactForm = () => {
  const form = useRef();
  const [confirmSend, setConfirm] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [checkUserEmail, setCheckUserEmail] = useState(false);

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(userEmail)) {
      setCheckUserEmail(true);
    } else {
      setCheckUserEmail(false);
    }
    console.log(userEmail)
  }, [userEmail]);

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
          setConfirm("Message sent successfully.");
        },
        (error) => {
          console.error("Message sending failed:", error.text);
          setConfirm(`Message sending failed: ${error.text}`);
        }
      );
    setUserEmail("");
    form.current.reset();
  };
  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:mt-12 flex flex-col items-center justify-center w-3/4 h-3/4 secondary dark:secondaryNight limeBorder rounded-md p-1 animate-flip-up animate-once animate-duration-[3500ms]"
      >
        <input
          className="w-3/4 limeBorder border-4 m-2 rounded-md p-1 text-black"
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <input
          className={!checkUserEmail ? "w-3/4 border-red-300 border-4 m-2 rounded-md p-1" : "w-3/4 limeBorder border-4 m-2 rounded-md p-1"}
          type="email"
          name="user_email"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-3/4 h-1/2 limeBorder border-4 m-2 rounded-md p-1 resize-none text-black"
          name="message"
          placeholder="Your Message"
          required
        />
        {!confirmSend ? (
          <button
            type="submit"
            className="primary dark:primaryNight rounded-md p-2 limeBorder m-2"
          >
            Send Email
          </button>
        ) : (
          <h1 className="text-white primary dark:primaryNight p-2 limeBorder rounded-md m-2">
            {confirmSend}
          </h1>
        )}
      </form>
    </>
  );
};

export default ContactForm;
