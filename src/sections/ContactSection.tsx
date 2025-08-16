import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0067B1] text-white py-22 px-4 sm:px-6 font-[Manrope]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="hidden lg:block col-span-1" />
          
          <div className="col-span-12 lg:col-span-10 px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>

          <div className="hidden lg:block col-span-1" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
