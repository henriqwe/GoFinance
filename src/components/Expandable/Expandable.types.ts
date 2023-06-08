export interface IExercise {
  id: string;
  name: string;
  imageSrc: string;
  characteristcs: {
    type: TCharacteristcType;
    label: string;
  }[];
}

export type TCharacteristcType =
  | 'repetitions'
  | 'series'
  | 'restTime'
  | 'weight';
