import React from "react";
import { classnames } from "../utils/general";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <h1 className="font-bold text-xl text-[#34454C] mt-2">
        Input
      </h1>
      <textarea
        rows="6"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={classnames(
          "text-base focus:outline-none w-full border-2 border-[#34454C] z-10 rounded-md px-4 py-2 bg-white m-auto"
        )}
      ></textarea>
    </>
  );
};

export default CustomInput;
