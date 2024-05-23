import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { ReactComponent as SearchBlack } from "../../assests/SearchBlack.svg";

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '285px',
  height: '50px',
  // background: '#FAFBFE',
  border: '1px solid #F0F0F0',
  borderRadius: '8px',
  color: 'inherit',
  '& .MuiInputBase-input': {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '21px',
    letterSpacing: '0.02em',
    textAlign: 'left',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
  '&::placeholder': {
    color: '#ABB6C7',
    opacity: 1,
  },
}));

export default function SearchBar({ value, onChange, name, placeholder }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <SearchIconWrapper>
        <SearchBlack />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search', name }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
