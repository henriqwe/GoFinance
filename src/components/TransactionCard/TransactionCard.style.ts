import tw from '@tailwind';

export const transactionCardStyle = tw`
w-full
bg-white
py-4
px-6
rounded-md
gap-5
`;

export const titleStyle = tw`
text-sm
text-title
`;

export const amountStyle = ({increment}: {increment: boolean}) => tw`
text-xl
${increment ? 'text-success' : 'text-danger'}
`;

export const iconStyle = (textColor: string) => tw`
text-${textColor}
`;

export const textStyle = tw`
text-text
`;

export const footerStyle = tw`
flex-row 
justify-between
`;

export const headerStyle = tw`
gap-1
`;

export const tagStyle = tw`
flex-row 
gap-4
`;
