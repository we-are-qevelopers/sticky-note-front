import { atom } from 'recoil';
import { recoilKeys } from '..';

export const exampleStringState = atom<string>({
  key: recoilKeys.atoms.EXAMPLE_STRING,
  default: 'example',
});
