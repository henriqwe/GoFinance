import tw from '@tailwind';

interface ICheckBoxStyle {
  value: boolean;
  disabled: boolean;
  labelPosition: 'left' | 'right';
}

export const wrapperCheckBoxStyle = (labelPosition: 'left' | 'right') => tw`
flex-1
items-center
${labelPosition === 'left' ? 'flex-row' : 'flex-row-reverse'}
`;

export const checkBoxStyle = ({
  value,
  disabled,
  labelPosition,
}: ICheckBoxStyle) => tw`
w-6
h-6
border
rounded-md
justify-center
items-center
${labelPosition === 'left' ? 'ml-4' : 'mr-4'}
${checkBoxColor({
  value,
  disabled,
})}
`;

function checkBoxColor({
  value,
  disabled,
}: Omit<ICheckBoxStyle, 'labelPosition'>) {
  if (value && !disabled) {
    return 'bg-high-green border-high-green';
  }
  if (value && disabled) {
    return 'bg-zinc-500 border-zinc-500';
  }
  return 'border-zinc-500';
}

export const iconStyle = tw`
text-gray-1
`;
