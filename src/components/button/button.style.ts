import tw from '@tailwind';

export const buttonStyle = (
  buttonColor: string,
  borderButton: boolean,
  borderColor: string,
) => tw`
rounded-md
w-full
border-${borderColor}
bg-${buttonColor}
${borderButton ? 'border' : 'border-0'}
h-12
flex
items-center
justify-center
`;

export const textStyle = (textButtonColor: string) => tw`
text-2xl
font-montserrat
text-${textButtonColor}
`;

export const buttonIcon = tw`
bg-transparent
flex
`;

export const buttonContent = tw`
flex
justify-center
items-center
flex-row
`;

export const iconStyle = tw`
mx-2
`;
