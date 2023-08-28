# ReactJS Emoji Keyboard | [Playground](https://3tn735.csb.app)

An emoji keyboard component for ReactJS.

![Novo Projeto (10)](https://github.com/robianchini/react-emoji-keyboard/assets/35143346/0f4030cc-6ef3-483f-ab07-a366328fd369)



## Installation

```
npm install reactjs-emoji-keyboard
```

or

```
yarn add reactjs-emoji-keyboard
```



## Usage


```jsx
import { EmojiKeyboard } from "reactjs-emoji-keyboard";

function App() {
  
  return (
    <EmojiKeyboard
      height={320}
      width={350}
      theme="dark"
      searchLabel="Procurar emoji"
      searchDisabled={false}
      onEmojiSelect={(emoji) =>console.log(emoji)}          
      categoryDisabled={false}
    />
  );
}

````

## Features

- 🌙 Dark theme
- 🎨 Customizable
- 🖱️ Customizable click handler


## Props

| Prop                   | Type              | Default    | Description                                                                                                                                |
| ---------------------- | ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| searchDisabled           | boolean          | false           |Show/hide emoji search bar |
| categoryDisabled           | boolean          | false           |Show/hide emoji categories |
| searchLabel           | string          | Procurar emoji           |Change the emoji search input label |
| onEmojiSelect           | function          | false           |Function executed when an emoji is selected |
| theme           | "ligh", "dark"          | "light"           |Sets the emoji keyboard theme |
| width           | number          | 320           |Sets the emoji keyboard width  |
| height           | number         | 350           |Sets the emoji keyboard height |
| containerStyle           | style          | -           |Applies the style to the main keyboard container |
| searchStyle           | style          | -           |Applies the style to the search container