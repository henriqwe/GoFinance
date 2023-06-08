import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function BoxIcon(props: SvgProps) {
  return (
    <Svg width={15} height={14} fill="none" {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1.154 3.667v6.666l6 2.667m6-9.333L7.154 1l-6 2.667h12Zm0 0-6 2.666 6-2.666Zm0 0v6.666l-6 2.667 6-9.333Zm-6 2.666-6-2.666 6 2.666Zm0 0V13 6.333Z"
      />
    </Svg>
  );
}
