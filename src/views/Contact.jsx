import HeroHeader from "../components/HeroHeader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col mt-10 justify-between items-center w-screen md:h-screen">
      <HeroHeader header="Contact Me" />
      <ContactForm />
    </div>
  );
};

export default Contact;
