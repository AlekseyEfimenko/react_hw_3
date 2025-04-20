import React from "react";
import css from './SearchBox.module.css';

type Props = {
  value: string;
  onSearch: (v: string) => void;
}

const SearchBox: React.FC<Props> = (props) => {
  const { value, onSearch } = props;

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(evt) => onSearch(evt.target.value)}
        className={css.search}
      ></input>
    </>
  )
}

export default SearchBox;