import '../font.css';
import { useState, CSSProperties } from 'react';
import {
  Container,
  SearchArea,
  ResultArea,
  ResultCategoryArea,
  ResultItem,
  CategoryArea,
} from './styles';

import { categories } from '../data/categories';
import { emojis } from '../data/emojis';

type CategoryType = {
  slug: string;
  name: string;
  emoji: string;
  subCategories: string[];
};

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

function EmojiKeyboard({
  searchDisabled,
  categoryDisabled,
  searchLabel,
  onEmojiSelect,
  theme,
  width,
  height,
  containerStyle,
  searchStyle,
}: Props) {
  const [search, setSearch] = useState<string>('');

  const handleItemClick = (item: EmojiType) => {
    if (onEmojiSelect) onEmojiSelect(item);
  };

  const scrollToSection = (sectionId: string) => {
    const container = document.querySelector('.scrolling-container');
    const section = document.getElementById(sectionId);

    if (container && section) {
      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();

      const scrollTop =
        sectionRect.top - containerRect.top + container.scrollTop;

      container.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  };

  return (
    <Container
      theme={theme}
      width={width}
      height={height}
      style={containerStyle}>
      {!searchDisabled && (
        <SearchArea theme={theme} style={searchStyle}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder={searchLabel || 'Procurar emoji'}
          />
        </SearchArea>
      )}

      <ResultArea className="scrolling-container">
        {categories?.map((cat: CategoryType) => (
          <ResultCategoryArea id={cat?.slug} key={cat.slug} theme={theme}>
            <p>{cat.name}</p>
            <div className="emojis-area">
              {emojis
                ?.filter((i) => i.group === cat.slug)
                ?.filter((i) => i.slug.includes(search))
                ?.map((item) => (
                  <ResultItem
                    key={item.slug}
                    onClick={() => handleItemClick(item)}>
                    {item?.character}
                  </ResultItem>
                ))}
            </div>
          </ResultCategoryArea>
        ))}
      </ResultArea>

      {!categoryDisabled && (
        <CategoryArea theme={theme}>
          {categories?.map((cat: CategoryType) => (
            <button key={cat.slug} onClick={() => scrollToSection(cat?.slug)}>
              {cat?.emoji}
            </button>
          ))}
        </CategoryArea>
      )}
    </Container>
  );
}

export default EmojiKeyboard;
