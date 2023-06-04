import tw from '@tailwind';

export const transactionTypeButtonStyle = (
  type: 'up' | 'down',
  isActive: boolean,
) => tw`
w-full
p-4
rounded-md
flex-row
items-center
gap-4
justify-center
border

 ${
   isActive
     ? type === 'up'
       ? 'bg-success/20 border-success/50'
       : 'bg-danger/20 border-danger/50'
     : 'border-text'
 }
`;

export const titleStyle = tw`
font-poppins
text-sm
`;

export const containerStyle = tw`
flex-1
`;
