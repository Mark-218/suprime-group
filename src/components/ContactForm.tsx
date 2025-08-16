import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="col-span-10 lg:col-span-5 grid grid-cols-1 gap-5">
      <input
        type="text"
        placeholder="Full name"
        className="bg-transparent border-b border-white/50 focus:border-white outline-none py-3 placeholder-white/80 text-base"
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-transparent border-b border-white/50 focus:border-white outline-none py-3 placeholder-white/80 text-base"
      />
      <input
        type="text"
        placeholder="Company"
        className="bg-transparent border-b border-white/50 focus:border-white outline-none py-3 placeholder-white/80 text-base"
      />
      <textarea
        placeholder="Message"
        rows={4}
        className="bg-transparent border-b border-white/50 focus:border-white outline-none py-3 placeholder-white/80 resize-none text-base"
      ></textarea>

      <button
        type="submit"
        className="px-8 mt-3 py-2 rounded-full text-base font-medium border border-white text-white hover:bg-white hover:!text-black transition-colors duration-300 w-fit cursor-pointer"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
