import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function ArrowsRightLeftIcon(props: SvgProps) {
  return (
    <Svg width={15} height={14} fill="none" {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1.154 10.333 3-2.666m0-4h9-9Zm9 0-3-2.667 3 2.667Zm0 0-3 2.666 3-2.666Zm-3 6.666h-9 9Zm-9 0 3 2.667-3-2.667Z"
      />
    </Svg>
  );
}
