import { NextPage } from 'next';
import React from 'react';
import {
  useRecoilState,
  selector,
  useRecoilValue,
  atom,
  RecoilRoot,
} from 'recoil';

const textState = atom({
  key: 'textState2',
  default: '',
});

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};

/**
 * フタマタがrecoilを学ぶためのサンプル
 * ほぼチュートリアル写経
 *
 * 書き方とか気になったりする点があったら遠慮なく、教えてください。(to ホリくん)
 */
const FRecoilSample: NextPage = () => {
  return (
    <RecoilRoot>
      <TextInput />
      <CharacterCount />
    </RecoilRoot>
  );
};

export default FRecoilSample;
