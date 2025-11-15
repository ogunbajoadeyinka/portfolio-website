import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-[10px] bg-white hover:scale-[1] duration-450 cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,0,0,0.1)] shadow-gray-200 max-sm:mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* ICON BOX */}
      <div
        className={`h-10 md:h-12 aspect-square center rounded-[4px] ${
          hover ? "bg-[#05275A]" : "bg-[#E8EEF7]"
        }`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-lg md:text-xl ${
            hover ? "text-white" : "text-[#05275A]"
          }`}
        />
      </div>

      <div className="ms-3.25">
        <p className="text-[12px] md:text-[14px] text-[#424E60] font-normal">
          {item?.title}:
        </p>
        <p className="text-[14px] md:text-[16px] text-[#05275A] font-medium">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
