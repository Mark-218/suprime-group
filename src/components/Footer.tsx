import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full mt-15 bg-gradient-to-b from-white to-[#D6E9F8] text-black font-[Manrope] bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/images/Footericon.png')",
        backgroundPosition: "right bottom",
        backgroundSize: "280px auto",
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 px-4 sm:px-6 lg:px-0 py-15">
          <div className="hidden lg:block col-span-1" />

          <div className="col-span-12 lg:col-span-10 px-4 sm:px-6 lg:px-12">
            <div className="flex justify-start mb-10">
              <img
                src="/assets/images/logo.png"
                alt="Supreme Group Logo"
                className="h-12 w-auto"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-5 !text-[21px] tracking-wide uppercase">
                  Applications
                </h3>
                <ul className="space-y-3 text-[15px]">
                  <li className="hover:text-[#0067B1] cursor-pointer">Apparel</li>
                  <li className="hover:text-[#0067B1] cursor-pointer">Automotive</li>
                  <li className="hover:text-[#0067B1] cursor-pointer">Filtration</li>
                  <li className="hover:text-[#0067B1] cursor-pointer">
                    Customised Nonwoven
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-5 !text-[21px] tracking-wide uppercase">
                  Company
                </h3>
                <ul className="space-y-3 text-[15px]">
                  <li className="hover:text-[#0067B1] cursor-pointer">Who We Are</li>
                  <li className="hover:text-[#0067B1] cursor-pointer">
                    Global Competency
                  </li>
                  <li className="hover:text-[#0067B1] cursor-pointer">Innovation</li>
                  <li className="hover:text-[#0067B1] cursor-pointer">ESG Impact</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-5 !text-[21px] tracking-wide uppercase">
                  More
                </h3>
                <ul className="space-y-3 text-[15px]">
                  <li className="hover:text-[#0067B1] cursor-pointer">Contact Us</li>
                  <li className="hover:text-[#0067B1] cursor-pointer">Careers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-5 !text-[21px] tracking-wide uppercase">
                  Follow Us
                </h3>
                <ul className="space-y-3 text-[15px]">
                  <li className="hover:text-[#0067B1] cursor-pointer">LinkedIn</li>
                </ul>
              </div>
            </div>

            <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-800 space-y-2 md:space-y-0 text-center md:text-left">
              <p className="leading-snug">©2024. All Rights Reserved.</p>
              <p className="leading-snug max-w-xs md:max-w-none">
                Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
              </p>
            </div>

          </div>

          <div className="hidden lg:block col-span-1" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
