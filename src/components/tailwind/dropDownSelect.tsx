// dropDownSelect component

import Dropdown from "./Dropdown";

export default function DropDownSelect({
  children,
  textBtn,
  className,
  icon,
}: {
  children: any;
  textBtn: string;
  className?: string;
  icon?: string;
}) {
  return (
    <>
      <Dropdown
        offset={[0, 6]}
        btnClassName="w-1/2 md:w-2/3 lg:w-[250px] mt-2 md:mt-5 bg-white/[0.023] rounded-lg backdrop-blur-sm border-white px-2 py-3 border-[1px] text-base md:text-lg font-medium text-white  items-center bg-none text-center flex gap-3 justify-center z-30 realtive "
        infinity={true}
        button={
          <>
            {textBtn}
            {icon && (
              <img
                className={` ${className} w-6 h-6 md:w-12 md:h-12`}
                src={icon}
                alt=""
              />
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 h-fit"
              fill="currentColor"
              viewBox="0 0 320 512"
            >
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </>
        }
      >
        {children}
      </Dropdown>
    </>
  );
}
