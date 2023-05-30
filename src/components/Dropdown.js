import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({year,setYear}) {

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div style={{display:"flex"}}>
        <Box sx={{ minWidth: 120,margin:"15px" }}>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={handleChange}
          style = {{
            width:"250px",
            margin:"auto"

          }}
        >
          <MenuItem value={1} onClick={()=>{setYear(1)}}>First Year</MenuItem>
          <MenuItem value={2} onClick={()=>{setYear(2)}}>Second Year</MenuItem>
          <MenuItem value={3} onClick={()=>{setYear(3)}}>Third Year</MenuItem>
          <MenuItem value={4} onClick={()=>{setYear(4)}}>Final Year</MenuItem>

        </Select>
      </FormControl>
    </Box>
        </div>
    
  );
}