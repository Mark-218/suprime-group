import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0067B1] text-white py-16 font-[Manrope]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          {/* Left empty col (for centering) */}
          <div className="hidden lg:block col-span-1" />

          {/* Main content: spans 10 cols on desktop */}
          <div className="col-span-12 lg:col-span-10 px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Info */}
              <div className="max-w-md w-full">
                <ContactInfo />
              </div>

              {/* Right Form */}
              <div className="max-w-lg w-full">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Right empty col */}
          <div className="hidden lg:block col-span-1" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
