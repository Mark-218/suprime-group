import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-0 flex flex-col justify-center">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl lg:text-[20px] font-semibold mb-3">
        Get in touch
      </h2>

      {/* Divider line */}
      <div className="w-10 h-[2px] bg-white mb-5"></div>

      {/* Subtext */}
      <p className="mb-6 text-sm sm:text-base lg:text-sm opacity-90">
        For general enquiries
      </p>

      {/* Info */}
      <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-[13px] leading-relaxed">
        <div>
          <p className="font-semibold">Address :</p>
          <p className="break-words">
            110, 16th Road, Chembur, Mumbai - 400071
          </p>
        </div>
        <div>
          <p className="font-semibold">Phone :</p>
          <p>+91 22 25208822</p>
        </div>
        <div>
          <p className="font-semibold">Email :</p>
          <p className="break-words">info@supremegroup.co.in</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
