import styled from 'styled-components';

interface ContainerProps {
  width?: number;
  height?: number;
  theme?: string;
}

interface SearchProps {
  theme?: string;
}

interface ResultProps {
  theme?: string;
}

interface CategoryProps {
  theme?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${(props) => (props.width ? `${props.width}px` : '320px')};
  height: ${(props) => (props.height ? `${props.height}px` : '350px')};
  min-height: 200px;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#323232' : '#eaebee'};
  box-sizing: border-box;
  padding: 10px;
  padding-bottom: 0px;
  font-family: 'Inter', sans-serif;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme === 'dark'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 10px;
  }
`;

export const SearchArea = styled.div<SearchProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#4c4c4e' : '#e1e1e1'};
  border-radius: 5px;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  padding: 0px 15px;

  input {
    margin: 0px;
    border: none;
    outline: none;
    background: none;
    height: 30px;
    color: ${(props) =>
      props.theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'};

    &::placeholder {
      font-size: 12px;
      color: ${(props) =>
        props.theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'};
    }
  }
`;

export const ResultArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
  margin: 5px 0px;
`;

export const ResultCategoryArea = styled.div<ResultProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin: 10px 5px;
    color: ${(props) => (props.theme === 'dark' ? '#eaebee' : '#323232')};
    font-size: 12px;
    user-select: none;
  }

  .emojis-area {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const ResultItem = styled.div`
  font-size: 30px;
  cursor: pointer;
  padding: 6px;
  box-sizing: border-box;
  transition: all ease-in-out 0.3s;
  border-radius: 5px;
  margin-right: 5px;
  user-select: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const CategoryArea = styled.div<CategoryProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  box-sizing: border-box;
  border-radius: 5px;
  padding-bottom: 0px 5px;
  overflow-x: auto;
  overflow-y: hidden;
  min-height: 40px;
  background-color: rgba(155, 155, 155, 0.1);

  button {
    margin: 0px;
    border: none;
    background: none;
    outline: none;
    font-size: 20px;
    transition: all ease-in-out 0.3s;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
    color: ${(props) => (props.theme === 'dark' ? '#eaebee' : '#323232')};

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
