import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

// stop sign by Michael Finney from the Noun Project

const StopSign: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={89.964}
      height={90}
      viewBox="0 0 89.964 90"
      fill="#3d3d4d"
      {...props}
    >
      <Path d="M89.936 26.297L63.55 0 26.297.064 0 26.45l.064 37.253L26.45 90l37.253-.064L90 63.55l-.064-37.253zM62.664 87.44l-35.183.06L2.56 62.664 2.5 27.481 27.336 2.56l35.183-.06L87.44 27.336l.06 35.183L62.664 87.44z" />
      <Path d="M84.943 28.375L61.489 5l-33.114.057L5 28.511l.057 33.114L28.511 85l33.114-.057L85 61.489l-.057-33.114zM66.68 60.93c0 2.881-5.645 9.585-8.703 11.055-1.838 1.749-21.464 1.617-24.227 0-3.587-1.691-8.585-8.703-8.585-12.702V27.176c.706-3.352 6.03-3.234 6.501 0v16.995c0 1.411 2.085 1.235 2.085 0V18.003c.588-3.675 6.027-3.558 6.704-.118v22.346c0 1.058 1.999 1 1.999 0 0-.97-.118-22.346 0-23.404.353-3.558 6.263-3.646 6.704 0v23.231c.176.97 1.97.97 2.117 0V20.002c.5-3.911 6.351-3.94 6.819 0v34.107c0 .882 2.002.823 2.002.071V43.759c.529-3.352 6.174-3.587 6.586 0-.002 2.695-.002 15.648-.002 17.171z" />
    </Svg>
  );
};

export default StopSign;