import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Link from "next/link";
import axios from "axios";

export default function Contact() {
  const [related, setRelated] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    status: false,
    text: "",
  });
  const formRef = useRef<HTMLFormElement>(null);
  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    console.log("submitted");
    try {
      let relatedIndex = Number(related);
      console.log(`abidinayhan94@gmail.com,${realtedUnits[relatedIndex].to}`);

      const data = {
        to: `${realtedUnits[relatedIndex].to}`, //abidinayhan94@gmail.com,
        name: e.target.name.value + " " + e.target.surname.value,
        email: e.target.email.value,
        relatedUnit: realtedUnits[relatedIndex].title,
        message: e.target.message.value,
      };
      const res = await axios.post("/api/email", data);
      console.log(res);
      setMessage({
        status: true,
        text: "Your message has been sent successfully.",
      });
      setLoading(false);
      formRef.current?.reset();
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMessage({
        status: false,
        text: "Something went wrong. Please try again later.",
      });
    }
  }
  return (
    <>
      <div
        id="contact"
        className="w-full max-w-[1400px] flex flex-col  justify-center items-center"
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 2xl:gap-20  w-full">
          <div className="flex flex-col justify-center  h-full  border-white/25 border rounded-[20px]  card-bg z-0 px-6 xl:px-16 py-6 md:py-10 gap-3 sm:gap-6 xl:gap-10">
            <h3 className="text-left	 ">Contact Form</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 text-white gap-4 xl:gap-10  "
            >
              <InputText id="standard-name" label="Name" name="name" />
              <InputText
                id="standard-disabled"
                label="Surname"
                name="surname"
              />
              <InputText
                id="standard-email"
                label="Email"
                type="email"
                name="email"
              />
              <FormControl
                fullWidth
                variant="standard"
                className="!border-white !border-b"
              >
                <InputLabel id="demo-simple-select-label" className="">
                  Related Unit*
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={related}
                  required
                  onChange={(e) => setRelated(e.target.value)}
                >
                  <MenuItem disabled value="">
                    <em>Related Unit*</em>
                  </MenuItem>
                  {realtedUnits.map((item, index) => {
                    return (
                      <MenuItem value={index} key={index}>
                        {item.title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                id="standard-textarea"
                label="Message"
                className="col-span-full"
                placeholder="Briefly tell us about your project. How  can we help you?"
                multiline
                required
                name="message"
                variant="standard"
                rows={2}
              />
              <button
                type="submit"
                className="col-span-full flex gap-3 justify-center items-center text-black bg-white rounded-lg w-full border border-white hover:bg-black hover:text-white transition-all p-2"
              >
                {loading ? (
                  <>
                    Loading
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="1.5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline-block h-5 w-5 animate-[spin_2s_linear_infinite] align-middle ltr:ml-2 rtl:mr-2"
                    >
                      <line x1="12" y1="2" x2="12" y2="6"></line>
                      <line x1="12" y1="18" x2="12" y2="22"></line>
                      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                      <line x1="2" y1="12" x2="6" y2="12"></line>
                      <line x1="18" y1="12" x2="22" y2="12"></line>
                      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                    </svg>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              <span
                className={`col-span-full text-xs ${
                  message.status ? "text-green-500" : "text-red-500"
                } xl:-mt-4`}
              >
                {message.text}
              </span>
            </form>
          </div>

          <div className="flex flex-col justify-center  h-full  border-white/25 border rounded-[20px]  card-bg z-0 px-6 xl:px-16 py-6 md:py-10 gap-3 sm:gap-6 xl:gap-10">
            <h3 className="text-white text-left pb-3 md:pb-5	 ">Contact Us</h3>
            <p className="text-white text-xs md:text-base w-full  text-left pb-4 md:pb-8">
              Engage with Our Experts: For a detailed discussion about your
              unique requirements or to gain further insights into our services,
              we warmly encourage you to directly contact our team. We are here
              to assist you.
            </p>
            <h3 className="text-white pb-1 md:pb-5 text-left	 ">
              Stay connected
            </h3>
            <div className="flex flex-wrap text-neutral-50 text-sm">
              <div className="mb-4 gap-5 flex flex-wrap items-center justify-center md:justify-start">
                <Link
                  className="hover:text-orange-400 transition-colors"
                  href={"https://twitter.com/DatsProject"}
                  target={"_Blank"}
                >
                  <svg
                    className="w-6 md:w-9 h-fit"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.7544 8.74992C31.6315 9.26034 30.4211 9.59575 29.1669 9.75617C30.4503 8.98325 31.4419 7.75825 31.9086 6.28534C30.6982 7.0145 29.3565 7.52492 27.9419 7.81659C26.7898 6.56242 25.1711 5.83325 23.3336 5.83325C19.9065 5.83325 17.1065 8.63325 17.1065 12.0895C17.1065 12.5853 17.1648 13.0666 17.2669 13.5187C12.0753 13.2562 7.45234 10.7624 4.37526 6.98534C3.83568 7.90409 3.52943 8.98325 3.52943 10.1208C3.52943 12.2937 4.62318 14.2187 6.31484 15.3124C5.27943 15.3124 4.31693 15.0208 3.47109 14.5833V14.627C3.47109 17.6603 5.62943 20.1978 8.48776 20.7666C7.57007 21.0177 6.60665 21.0527 5.67318 20.8687C6.06927 22.1119 6.845 23.1997 7.89133 23.9792C8.93765 24.7587 10.202 25.1907 11.5065 25.2145C9.29514 26.9651 6.55401 27.9114 3.73359 27.8978C3.23776 27.8978 2.74193 27.8687 2.24609 27.8103C5.01693 29.5895 8.31276 30.6249 11.8419 30.6249C23.3336 30.6249 29.6482 21.0874 29.6482 12.8187C29.6482 12.5416 29.6482 12.2791 29.6336 12.002C30.8586 11.127 31.9086 10.0187 32.7544 8.74992Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  className="hover:text-orange-400 transition-colors"
                  href={"mailto:hello@datsproject.io"}
                  target={"_Blank"}
                >
                  <svg
                    className="w-6 md:w-9 h-fit"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0827 8.74992C32.0827 7.14575 30.7702 5.83325 29.166 5.83325H5.83268C4.22852 5.83325 2.91602 7.14575 2.91602 8.74992V26.2499C2.91602 27.8541 4.22852 29.1666 5.83268 29.1666H29.166C30.7702 29.1666 32.0827 27.8541 32.0827 26.2499V8.74992ZM29.166 8.74992L17.4993 16.027L5.83268 8.74992H29.166ZM29.166 26.2499H5.83268V11.6666L17.4993 18.9583L29.166 11.6666V26.2499Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  className="hover:text-orange-400 transition-colors"
                  href={"https://t.me/datsprojectofficial"}
                  target={"_Blank"}
                >
                  <svg
                    className="w-6 md:w-9 h-fit"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_367_1731)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.841 6.46037C29.2014 6.30869 29.5959 6.25637 29.9833 6.30887C30.3708 6.36137 30.7371 6.51676 31.0441 6.75887C31.3512 7.00097 31.5877 7.32095 31.7291 7.68549C31.8705 8.05002 31.9116 8.4458 31.8481 8.83162L28.5406 28.8939C28.2198 30.8291 26.0965 31.9389 24.3217 30.975C22.8371 30.1685 20.6321 28.926 18.6487 27.6295C17.6571 26.9806 14.6194 24.9025 14.9927 23.4237C15.3135 22.1593 20.4177 17.4081 23.3344 14.5833C24.4792 13.4735 23.9571 12.8333 22.6052 13.8541C19.2467 16.3887 13.8581 20.2431 12.076 21.3281C10.504 22.2847 9.68437 22.4481 8.70437 22.2847C6.91645 21.9872 5.25833 21.5264 3.90499 20.965C2.07624 20.2066 2.1652 17.6924 3.90353 16.9604L28.841 6.46037Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_367_1731">
                        <rect width="35" height="35" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  className="hover:text-orange-400 transition-colors"
                  href={"https://github.com/datsproject"}
                  target={"_Blank"}
                >
                  <svg
                    className="w-6 md:w-9 h-fit"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_367_1727)">
                      <path
                        d="M9.20906 9.0066C8.84448 8.07618 8.85906 7.01306 9.02093 6.04035C10.1354 6.37427 11.182 6.90253 12.1126 7.60077C12.5209 7.91285 13.0561 8.01347 13.5549 7.86327C14.8347 7.48036 16.1638 7.28775 17.4997 7.2916C18.9011 7.2916 20.2326 7.49577 21.4416 7.86181C21.9403 8.01347 22.4755 7.91139 22.8824 7.59931C23.8125 6.90123 24.8587 6.37297 25.9726 6.03889C26.1345 7.0116 26.1476 8.07472 25.7859 9.00368C25.5672 9.56368 25.6766 10.2083 26.0893 10.6662C27.1451 11.8372 27.708 13.1833 27.708 14.5833C27.708 17.6662 24.8351 20.6893 20.2209 21.6095C19.0659 21.8399 18.6153 23.2939 19.4991 24.1266C20.0664 24.6604 20.4163 25.4128 20.4163 26.2499V30.6249C20.4163 31.0117 20.57 31.3826 20.8435 31.6561C21.117 31.9296 21.4879 32.0833 21.8747 32.0833C22.2615 32.0833 22.6324 31.9296 22.9059 31.6561C23.1794 31.3826 23.333 31.0117 23.333 30.6249V26.2499C23.333 25.4187 23.158 24.6283 22.8459 23.9122C27.2457 22.3853 30.6247 18.9481 30.6247 14.5833C30.6247 12.6189 29.9188 10.8135 28.7478 9.30118C29.0541 8.10535 29.0264 6.90077 28.9097 5.97618C28.8061 5.14785 28.6618 4.06285 28.0784 3.41535C27.2107 2.45431 25.7743 3.02014 24.7534 3.36868C23.6584 3.73923 22.6165 4.25157 21.6545 4.89264C20.2968 4.54616 18.9009 4.37222 17.4997 4.37493C16.0501 4.37493 14.6516 4.55722 13.342 4.8941C12.3799 4.25301 11.3381 3.74067 10.243 3.37014C9.22218 3.02014 7.78427 2.45431 6.91656 3.41535C6.32156 4.07452 6.1976 5.07347 6.09114 5.92222L6.08385 5.97764C5.96718 6.90368 5.94093 8.10972 6.24718 9.30702C5.08052 10.8178 4.37468 12.6203 4.37468 14.5833C4.37468 18.9466 7.75364 22.3853 12.1534 23.9122C11.835 24.6404 11.6692 25.426 11.6664 26.2208L11.4214 26.2703C10.3757 26.4147 9.70635 26.2849 9.25135 26.0924C8.14302 25.6229 7.57135 24.4401 6.87427 23.536C6.43968 22.9745 5.80677 22.2731 4.83552 21.9493C4.65377 21.8888 4.46189 21.8647 4.27082 21.8783C4.07975 21.8919 3.89324 21.9431 3.72194 22.0288C3.37597 22.2019 3.11295 22.5054 2.99073 22.8724C2.8685 23.2395 2.8971 23.6401 3.07022 23.986C3.24334 24.332 3.5468 24.595 3.91385 24.7172C4.7276 24.9885 5.29052 26.3826 5.80677 27.001C6.35073 27.6543 7.07406 28.3368 8.11093 28.7772C9.10552 29.2001 10.2736 29.3504 11.6664 29.1797V30.6249C11.6664 31.0117 11.82 31.3826 12.0935 31.6561C12.367 31.9296 12.7379 32.0833 13.1247 32.0833C13.5115 32.0833 13.8824 31.9296 14.1559 31.6561C14.4294 31.3826 14.583 31.0117 14.583 30.6249V26.2499C14.583 25.4128 14.933 24.6604 15.5003 24.1266C16.3855 23.2924 15.9334 21.8399 14.7784 21.6095C10.1628 20.6893 7.29135 17.6662 7.29135 14.5833C7.29135 13.1862 7.85281 11.8401 8.90718 10.6691C9.31989 10.2112 9.42781 9.5666 9.20906 9.0066Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_367_1727">
                        <rect width="35" height="35" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  className="hover:text-orange-400 transition-colors"
                  href={"https://medium.com/@dats_project"}
                  target={"_Blank"}
                >
                  <svg
                    className="w-6 md:w-9 h-fit"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83529 4.375H29.1686C29.5554 4.375 29.9263 4.52865 30.1998 4.80214C30.4733 5.07563 30.627 5.44656 30.627 5.83333V29.1667C30.627 29.5534 30.4733 29.9244 30.1998 30.1979C29.9263 30.4714 29.5554 30.625 29.1686 30.625H5.83529C5.44851 30.625 5.07758 30.4714 4.80409 30.1979C4.5306 29.9244 4.37695 29.5534 4.37695 29.1667V5.83333C4.37695 5.44656 4.5306 5.07563 4.80409 4.80214C5.07758 4.52865 5.44851 4.375 5.83529 4.375ZM7.29362 7.29167V27.7083H27.7103V7.29167H7.29362ZM25.2311 23.2458L26.6238 24.6371V24.71H19.4474V24.6371L20.9115 23.2458C21.0574 23.1 21.1303 22.9542 21.1303 22.734V14.0933C21.1303 13.7258 21.1303 13.214 21.2047 12.775L16.3717 24.8573H16.2988L11.3172 13.7258C11.2442 13.4342 11.1713 13.4342 11.0984 13.2883V20.6092C11.024 21.1225 11.0984 21.5615 11.3172 22.0019L13.2947 24.6371V24.71H8.02133V24.6371L9.99883 21.9275C10.2176 21.49 10.2905 20.9767 10.2176 20.5363V12.4833C10.2176 12.1173 10.1447 11.6769 9.85299 11.3852L8.5332 9.55208V9.47917H13.6607L17.9074 18.9262L21.6436 9.47917H26.6238V9.55208L25.2326 11.1635C25.0867 11.3094 25.0138 11.5296 25.0138 11.6754V22.8069C25.0138 22.9527 25.0853 23.1729 25.2311 23.2458Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  className="hover:text-orange-400 transition-colors"
                  href={"https://www.linkedin.com/company/dats-project/"}
                  target={"_Blank"}
                >
                  <svg
                    className="w-6 md:w-9 h-fit"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1204 7.29166C10.1201 8.06521 9.81239 8.80692 9.26514 9.35363C8.71789 9.90034 7.97587 10.2073 7.20232 10.2069C6.42877 10.2065 5.68706 9.89882 5.14035 9.35157C4.59364 8.80431 4.28672 8.06229 4.28711 7.28874C4.2875 6.5152 4.59516 5.77348 5.14241 5.22678C5.68967 4.68007 6.43169 4.37315 7.20523 4.37354C7.97878 4.37392 8.7205 4.68158 9.2672 5.22884C9.81391 5.77609 10.1208 6.51811 10.1204 7.29166ZM10.2079 12.3667H4.37461V30.625H10.2079V12.3667ZM19.4246 12.3667H13.6204V30.625H19.3663V21.0437C19.3663 15.7062 26.3225 15.2104 26.3225 21.0437V30.625H32.0829V19.0604C32.0829 10.0625 21.7871 10.3979 19.3663 14.8167L19.4246 12.3667Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  className="hover:text-orange-400 transition-colors"
                  href={"https://discord.com/invite/QZfJhsJY9J"}
                  target={"_Blank"}
                >
                  <svg
                    className="w-6 md:w-9 h-fit"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.1014 7.7729C26.1618 6.86874 24.0618 6.21249 21.8743 5.83332C21.8551 5.83271 21.836 5.8363 21.8184 5.84386C21.8007 5.85142 21.785 5.86276 21.7722 5.87707C21.5097 6.35832 21.2034 6.9854 20.9993 7.46665C18.6791 7.11665 16.3195 7.11665 13.9993 7.46665C13.7951 6.97082 13.4889 6.35832 13.2118 5.87707C13.1972 5.8479 13.1534 5.83332 13.1097 5.83332C10.9222 6.21249 8.83678 6.86874 6.88261 7.7729C6.86803 7.7729 6.85344 7.78749 6.83886 7.80207C2.87219 13.7375 1.77844 19.5125 2.31803 25.2292C2.31803 25.2583 2.33261 25.2875 2.36178 25.3021C4.98678 27.2271 7.50969 28.3937 10.0034 29.1667C10.0472 29.1812 10.0909 29.1667 10.1055 29.1375C10.6889 28.3354 11.2139 27.4896 11.6659 26.6C11.6951 26.5417 11.6659 26.4833 11.6076 26.4687C10.7764 26.1479 9.98886 25.7687 9.21594 25.3312C9.15761 25.3021 9.15761 25.2146 9.20136 25.1708C9.36178 25.0542 9.52219 24.9229 9.68261 24.8062C9.71178 24.7771 9.75553 24.7771 9.78469 24.7917C14.8014 27.0812 20.2118 27.0812 25.1701 24.7917C25.1993 24.7771 25.243 24.7771 25.2722 24.8062C25.4326 24.9375 25.593 25.0542 25.7534 25.1854C25.8118 25.2292 25.8118 25.3167 25.7389 25.3458C24.9805 25.7979 24.1784 26.1625 23.3472 26.4833C23.2889 26.4979 23.2743 26.5708 23.2889 26.6146C23.7555 27.5042 24.2805 28.35 24.8493 29.1521C24.893 29.1667 24.9368 29.1812 24.9805 29.1667C27.4889 28.3937 30.0118 27.2271 32.6368 25.3021C32.6659 25.2875 32.6805 25.2583 32.6805 25.2292C33.3222 18.6229 31.6159 12.8917 28.1597 7.80207C28.1451 7.78749 28.1305 7.7729 28.1014 7.7729ZM12.4243 21.7437C10.9222 21.7437 9.66803 20.3583 9.66803 18.6521C9.66803 16.9458 10.893 15.5604 12.4243 15.5604C13.9701 15.5604 15.1951 16.9604 15.1805 18.6521C15.1805 20.3583 13.9555 21.7437 12.4243 21.7437ZM22.5889 21.7437C21.0868 21.7437 19.8326 20.3583 19.8326 18.6521C19.8326 16.9458 21.0576 15.5604 22.5889 15.5604C24.1347 15.5604 25.3597 16.9604 25.3451 18.6521C25.3451 20.3583 24.1347 21.7437 22.5889 21.7437Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                {/* <Link className="hover:text-orange-400 transition-colors" href={"#"} target={"_Blank"}>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6779 19.0167C15.6779 18.1854 14.9924 17.5 14.1612 17.5C13.3299 17.5 12.6445 18.1854 12.6445 19.0167C12.6445 19.4189 12.8043 19.8047 13.0888 20.0891C13.3732 20.3735 13.759 20.5333 14.1612 20.5333C14.5634 20.5333 14.9492 20.3735 15.2336 20.0891C15.5181 19.8047 15.6779 19.4189 15.6779 19.0167ZM20.5487 22.4729C19.8924 23.1292 18.4924 23.3625 17.5008 23.3625C16.5091 23.3625 15.1091 23.1292 14.4529 22.4729C14.4174 22.4349 14.3745 22.4047 14.3268 22.384C14.2792 22.3633 14.2277 22.3526 14.1758 22.3526C14.1238 22.3526 14.0724 22.3633 14.0247 22.384C13.9771 22.4047 13.9342 22.4349 13.8987 22.4729C13.8607 22.5084 13.8304 22.5513 13.8097 22.599C13.789 22.6466 13.7784 22.698 13.7784 22.75C13.7784 22.802 13.789 22.8534 13.8097 22.901C13.8304 22.9487 13.8607 22.9916 13.8987 23.0271C14.9341 24.0625 16.9174 24.15 17.5008 24.15C18.0841 24.15 20.0674 24.0625 21.1029 23.0271C21.1408 22.9916 21.1711 22.9487 21.1918 22.901C21.2125 22.8534 21.2232 22.802 21.2232 22.75C21.2232 22.698 21.2125 22.6466 21.1918 22.599C21.1711 22.5513 21.1408 22.5084 21.1029 22.4729C20.957 22.3271 20.7091 22.3271 20.5487 22.4729ZM20.8404 17.5C20.0091 17.5 19.3237 18.1854 19.3237 19.0167C19.3237 19.8479 20.0091 20.5333 20.8404 20.5333C21.6716 20.5333 22.357 19.8479 22.357 19.0167C22.357 18.1854 21.6862 17.5 20.8404 17.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.4993 2.91675C9.44935 2.91675 2.91602 9.45008 2.91602 17.5001C2.91602 25.5501 9.44935 32.0834 17.4993 32.0834C25.5493 32.0834 32.0827 25.5501 32.0827 17.5001C32.0827 9.45008 25.5493 2.91675 17.4993 2.91675ZM25.9577 19.4397C25.9868 19.6438 26.0014 19.8626 26.0014 20.0813C26.0014 23.348 22.1952 26.0022 17.4993 26.0022C12.8035 26.0022 8.99727 23.348 8.99727 20.0813C8.99727 19.8626 9.01185 19.6438 9.04102 19.4397C8.29727 19.1042 7.78685 18.3605 7.78685 17.5001C7.78469 17.0819 7.90614 16.6724 8.13596 16.323C8.36578 15.9736 8.69372 15.7 9.07858 15.5364C9.46344 15.3728 9.88806 15.3265 10.2991 15.4035C10.7102 15.4804 11.0893 15.6771 11.3889 15.9688C12.8618 14.9042 14.9035 14.2334 17.1639 14.1605L18.2431 9.07091C18.2577 8.96883 18.316 8.88133 18.4035 8.83758C18.491 8.77925 18.5931 8.76466 18.6952 8.77925L22.2243 9.53758C22.344 9.29488 22.5265 9.08863 22.7528 8.94021C22.979 8.7918 23.2409 8.70663 23.5112 8.69353C23.7815 8.68044 24.0504 8.73989 24.2899 8.86574C24.5295 8.99159 24.731 9.17924 24.8736 9.40923C25.0162 9.63922 25.0947 9.90317 25.1009 10.1737C25.1071 10.4442 25.0408 10.7115 24.9088 10.9478C24.7769 11.1841 24.5842 11.3807 24.3506 11.5174C24.1171 11.6541 23.8512 11.7258 23.5806 11.7251C22.7639 11.7251 22.1077 11.0834 22.0639 10.2813L18.8993 9.6105L17.9368 14.1605C20.1681 14.2334 22.166 14.9188 23.6244 15.9688C23.8479 15.7554 24.1154 15.5933 24.4081 15.494C24.7009 15.3947 25.0118 15.3606 25.3191 15.394C25.6264 15.4274 25.9227 15.5275 26.1872 15.6874C26.4518 15.8473 26.6782 16.0631 26.8507 16.3196C27.0231 16.5761 27.1375 16.8673 27.1857 17.1726C27.2339 17.4779 27.2148 17.7901 27.1297 18.0873C27.0447 18.3845 26.8957 18.6595 26.6932 18.8931C26.4908 19.1267 26.2398 19.3132 25.9577 19.4397Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function InputText({
  name,
  label,
  id,
  type = "text",
  ...props
}: {
  name: string;
  label: string;
  id: string;
  type?: string;
}) {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      variant="standard"
      required
      type={type}
      /* inputProps={{
        style: {
          color: "white",
          borderBottom: "1px solid white",
        },
      }}
      InputLabelProps={{
        style: {
          color: "white",
        },
      }}
      {...props} */
    />
  );
}
const realtedUnits = [
  {
    id: "0",
    title: "General",
    to: process.env.NEXT_PUBLIC_GENERAL || "abidinayhan94@gmail.com",
  },
  {
    id: "1",
    title: "Partnership",
    to: process.env.NEXT_PUBLIC_PARTNERSHIP || "abidinayhan94@gmail.com",
  },
  {
    id: "2",
    title: "Job Opportunities",
    to: process.env.NEXT_PUBLIC_JOBOPP || "abidinayhan94@gmail.com",
  },
  {
    id: "3",
    title: "Marketing",
    to: process.env.NEXT_PUBLIC_MARKETING || "abidinayhan94@gmail.com",
  },
];
