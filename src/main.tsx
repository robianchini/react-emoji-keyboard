import React from 'react';
import ReactDOM from 'react-dom/client';
import { EmojiKeyboard } from './lib';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EmojiKeyboard
      theme="dark"
      onEmojiSelect={(item) => console.log({ item })}
      height={150}
      categoryStyle="icon"
    />
  </React.StrictMode>
);
