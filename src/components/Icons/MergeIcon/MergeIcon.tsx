import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function MergeIcon(props: SvgProps) {
  return (
    <Svg width={15} height={15} fill="none" {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.154 10.466h-1.5a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v1.5l-6 6Zm1.5 3h6a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5h-6a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5Z"
      />
    </Svg>
  );
}
