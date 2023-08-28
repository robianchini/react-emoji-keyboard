import { CSSProperties } from "react";
type EmojiType = {
    slug: string;
    character: string;
    unicodeName: string;
    codePoint: string;
    group: string;
    subGroup: string;
};
type Props = {
    width?: number;
    height?: number;
    theme?: 'light' | 'dark';
    searchDisabled?: boolean;
    categoryStyle?: 'emoji' | 'icon';
    categoryDisabled?: boolean;
    searchLabel?: string;
    containerStyle?: CSSProperties;
    searchStyle?: CSSProperties;
    onEmojiSelect?: (item: EmojiType) => void;
};
export function EmojiKeyboard({ searchDisabled, categoryDisabled, searchLabel, onEmojiSelect, theme, width, height, containerStyle, searchStyle, }: Props): import("react/jsx-runtime").JSX.Element;

//# sourceMappingURL=reactjs-emoji-keyboard.d.ts.map
