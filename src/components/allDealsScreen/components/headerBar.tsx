import React, { useState, FC, useEffect } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import _ from "lodash";

type THeaderToolbarProps = {
  handleTitleChange: (t: string) => void;
};

const HeaderToolbar: FC<THeaderToolbarProps> = ({ handleTitleChange }) => {
  const [search, setSearch] = useState<string>("");
  const [hasSearched, setHasSearched] = useState<boolean>(false)

  const handleTitleDebounce = _.debounce(handleTitleChange, 1500);

  useEffect(() => {
    !hasSearched && setHasSearched(true)
    hasSearched && handleTitleDebounce(search);
  }, [search]);

  return (
    <div className="header-toolbar" role="header-toolbar">
      <Typography variant="h3">Deals</Typography>
      <FormControl sx={{ m: 1, maxwidth: "22ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
        <OutlinedInput
          id="outlined-adornment-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          label="Search"
        />
      </FormControl>
    </div>
  );
};

export default HeaderToolbar;
