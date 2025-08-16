import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="w-full max-w-full px-4 sm:px-0 flex flex-col justify-center">
      <h2 className="text-2xl lg:text-[20px] font-semibold mb-3">Get in touch</h2>
      <div className="w-10 h-[2px] bg-white mb-5"></div>
      <p className="mb-6 text-base lg:text-sm opacity-90">For general enquiries</p>

      <div className="space-y-5 text-sm lg:text-[13px] leading-relaxed">
        <div>
          <p className="font-semibold">Address :</p>
          <p>110, 16th Road, Chembur, Mumbai - 400071</p>
        </div>
        <div>
          <p className="font-semibold">Phone :</p>
          <p>+91 22 25208822</p>
        </div>
        <div>
          <p className="font-semibold">Email :</p>
          <p>info@supremegroup.co.in</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
