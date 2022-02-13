import React, { useState, FC } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

type TFilterToolbarProps = {
  filterResults: (f: string) => void
}

const FilterToolbar: FC<TFilterToolbarProps> = ({
  filterResults
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [currFilter, setCurrFilter] = useState<string>("");

  const handleFilterChange = (f: string) => {
    setCurrFilter(f);
    setSelectedFilters([...selectedFilters, f]);
    filterResults(f)
  };

  const handleClearFilters = () => {
    setCurrFilter("");
    setSelectedFilters([]);
    filterResults("")
  };

  const handleCheck = (label: string) => {
    let r = false;
    selectedFilters.includes(label) ? r = true : r = false;
    return r
  };

  return (
    <div className="filter-toolbar" role="filter-toolbar">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currFilter}
          label="Filter"
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <MenuItem value={"isOnSale"}>On Sale</MenuItem>
        </Select>
      </FormControl>

      <FormGroup style={{ display: "flex", flexDirection: "row" }}>
        {selectedFilters.length > 0 && (
          <Button
            variant="contained"
            sx={{ width: 50, margin: 2 }}
            onClick={() => handleClearFilters()}
          >
            Clear
          </Button>
        )}
        <FormControlLabel
          sx={{ margin: 1 }}
          control={<Checkbox checked={handleCheck("isOnSale")} />}
          label="On Sale"
        />
      </FormGroup>
    </div>
  );
};

export default FilterToolbar;
