import tw from '@tailwind';

export const highlightCardStyle = (bgColor: string) => tw`
h-52 
w-80  
rounded-lg 
px-6 
pt-5 
pb-11 
justify-between 
bg-${bgColor}
`;

export const headerStyle = tw`
justify-between 
flex-row
`;

export const titleStyle = (textColor: string) => tw`
font-poppins  
text-sm 
text-${textColor}
`;

export const iconStyle = (textColor: string) => tw`
text-${textColor}
`;

export const moneyStyle = (textColor: string) => tw`
font-poppinsMedium 
text-4xl 
text-${textColor}
`;
export const lastTransactionStyle = (textColor: string) => tw`
font-poppins 
text-xs 
text-${textColor}
`;
