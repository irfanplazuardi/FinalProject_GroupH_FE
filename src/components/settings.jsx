import React from "react";
import ButtonStyle from "./button";
import SwitcherMode from "./settings_darkmode/switch";

const Settings = () => {
  return (
    <div className="xl:h-[100vh] lg:h-[80] md:h-[50vh] sm:h-[50vh] xl:w-[100vh] lg:w-[80vh] md:w-[50vh] sm:w-[50vh]">
      <div className="flex flex-col items-center justify-center py-3 xl:w-[100vh] ">
        <h2 className="font-bold text-3xl dark:text-white">Settings</h2>
        <div className="m-4 bg-[#D9D9D9] rounded-xl xl:w-[80vh] md:w-[20vh] lg:w-[60vh] sm:w-[40vh] my-3 ">
          <div className="flex justify-between m-2 bg-white p-2 rounded-md items-center">
            <div className="font-semibold text-lg sm:text-sm">Mode Setting</div>
            <SwitcherMode />
          </div>
          <div className="flex justify-between m-2 bg-white p-2 rounded-md items-center">
            <div className="font-semibold text-lg sm:text-sm">Notification</div>
            <ButtonStyle className="text-sm" widthButton="24">
              ON
            </ButtonStyle>
          </div>
          <div className="flex justify-between m-2 bg-white p-2 rounded-md items-center sm:gap-2">
            <div className="font-semibold text-lg sm:text-sm">Background</div>
            <ButtonStyle className="text-sm sm:text-xs" widthButton="24">
              Change
            </ButtonStyle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
