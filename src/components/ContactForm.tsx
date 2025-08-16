import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="w-full max-w-full col-span-10 lg:col-span-5 grid grid-cols-1 gap-5 px-4 sm:px-6 lg:px-0">
      {/* Full name */}
      <input
        type="text"
        placeholder="Full name"
        className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-3 placeholder-white/80 text-base"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-3 placeholder-white/80 text-base"
      />

      {/* Company */}
      <input
        type="text"
        placeholder="Company"
        className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-3 placeholder-white/80 text-base"
      />

      {/* Message */}
      <textarea
        placeholder="Message"
        rows={4}
        className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-3 placeholder-white/80 resize-none text-base"
      ></textarea>

      {/* Submit button */}
      <button
        type="submit"
        className="px-8 mt-3 py-2 rounded-full text-base font-medium border border-white text-white 
        hover:bg-white hover:!text-black transition-colors duration-300 
        w-full sm:w-fit cursor-pointer"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
