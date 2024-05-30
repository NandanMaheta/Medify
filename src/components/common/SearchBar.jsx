import React from 'react';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as SearchBlack } from "../../assests/SearchBlack.svg"

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  width: '285px',
  height: '50px',
  border: '1px solid #F0F0F0',
  borderRadius: '8px',
  color: 'inherit',
  // background: '#FAFBFE',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '21px',
  letterSpacing: '0.02em',
  textAlign: 'left',
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  '&::placeholder': {
    color: '#ABB6C7',
    opacity: 1,
  },
  '& .MuiSelect-icon': {
    right: '10px',
  },
}));

export default function SearchDropdown({ value, onChange, name, placeholder, options }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <SearchIconWrapper>
        <SearchBlack />
      </SearchIconWrapper>
      <StyledSelect
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'search', name }}
        renderValue={selected => selected || placeholder}
      >
        <MenuItem disabled value="">
          {placeholder}
        </MenuItem>
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </div>
  );
}
