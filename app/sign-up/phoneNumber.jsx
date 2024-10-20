import React from 'react';
import Input from './input'; // Assuming you have the reusable Input component

const PhoneNumberInput = ({ countryCode, setCountryCode }) => {
  return (
    <div className="flex mr-[19px] items-center border-2 border-[#BDC1C6] rounded-xl bg-[#FFF9B7] w-full">
      <Input
        type="text"
        value={countryCode}
        placeholder="Country Code"
        className="w-[55px] border-none p-2 "
        onChange={(e) => setCountryCode(e.target.value)}
      />
      <span className=" w-[2px] h-14 bg-[#BDC1C6}"></span>
      <Input
        type="number"
        placeholder="Phone Number"
        className="flex-1 border-none p-4 w-[10%] "
      />
    </div>
  );
};

export default PhoneNumberInput;
