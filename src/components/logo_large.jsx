import React from "react";

const VogueSchoolLogoLarge = ({
  fontSize,
  color,
  fontSizeSchool,
  fontSizeBeyond,
  marginSchool,
}) => {
  const defaultFontSize = fontSize || "5xl";
  const defaultColor = color || "white";
  const defaultFontSizeSchool = fontSizeSchool || "3xl";
  const defaultFontSizeBeyond = fontSizeBeyond || "xl";
  const defaultMargin = marginSchool || "2";

  return (
    <div className="text-center p-7">
      <div
        className={`flex items-center justify-center h-10 text-${defaultColor} uppercase font-bold text-${defaultFontSize} tracking-widest`}
      >
        <div class="mr-1">V</div>
        <div class="mr-1">O</div>
        <div class="mr-1">G</div>
        <div class="mr-1">U</div>
        <div class="mr-1">E</div>
      </div>
      <div
        className={`text-${defaultFontSizeSchool} font-medium text-${defaultColor} rounded-full mt-${defaultMargin} px-2 py-1`}
      >
        School
      </div>
      <div
        className={`text-${defaultFontSizeBeyond} font-light text-${defaultColor} rounded-full px-2`}
      >
        Beyond the World!
      </div>
    </div>
  );
};

export default VogueSchoolLogoLarge;
