import tw from '@tailwind';

export const containerStyle = tw`
rounded-xl
bg-gray-1
mb-3
`;

export const headerStyle = tw`
flex-row
items-center
gap-4
`;

export const imageContainerStyle = tw`
relative
justify-center
items-center
`;

export const imageIconStyle = tw`
absolute
text-high-green
`;

export const imageStyle = (isExpanded: boolean) => tw`
w-20
h-20
${isExpanded ? 'rounded-tl-xl' : 'rounded-l-xl'}
`;

export const labelStyle = (isActive: boolean) => tw`
flex-1 
text-base 
font-semibold
${isActive ? 'text-high-green' : 'text-white'}
`;

export const checkBoxWrapperStyle = tw`
flex-row
flex-1 
gap-4 
m-3 
items-center 
h-full
`;

export const iconStyle = tw`
ml-3 
text-white
`;

export const iconCharacteristcStyle = tw`
text-white
`;

export const wrapperCharacteristcsStyle = (isExpanded: boolean) => tw` 
bg-gra-1 
${isExpanded ? 'px-4 py-6' : 'h-0'}
`;

export const characteristcLabelStyle = tw`
font-montserrat 
text-white 
pl-1
`;

export const characteristcBoxStyle = tw`
flex-row 
p-0.5 
items-center
`;
