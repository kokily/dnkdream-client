import React from 'react';
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

// Styles
const Container = styled.div`
  input {
    margin: 0 auto;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    font-size: 0.9rem;
    border: 1px solid #d0cfce;
    border-radius: 25px;
    outline: none;
    &:focus {
      border: 1px solid #008abf;
      transition: 0.35s ease;
      color: #008abf;
      &::-webkit-input-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
      &::-moz-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
      &:-ms-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
    }
  }
  svg {
    position: relative;
    float: right;
    width: 25px;
    height: 25px;
    top: -32px;
    right: 10px;
    cursor: pointer;
    &:hover {
      color: #463883;
    }
  }
`;

interface Props {
  mode: string;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  mode,
  search,
  onChange,
  onSearch,
  onKeyPress,
}) => {
  return (
    <Container>
      <input
        type="text"
        name="search"
        value={search}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={`${mode} 검색`}
      />
      <a onClick={onSearch}>
        <BiSearchAlt />
      </a>
    </Container>
  );
};

export default Search;
