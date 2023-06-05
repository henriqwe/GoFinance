import tw from '@tailwind';

export const containerStyle = tw`
w-full 
h-full
`;

export const categoryStyle = ({isActive}: {isActive: boolean}) => tw`
flex-row
gap-2
p-4
${isActive ? 'bg-secondary-medium' : ''}
`;

export const titleStyle = ({isActive}: {isActive: boolean}) => tw`
${isActive ? 'text-white' : 'text-text'}
`;

export const separatorStyle = tw`
border-b
border-text
`;

export const footerStyle = tw`
p-6
`;
