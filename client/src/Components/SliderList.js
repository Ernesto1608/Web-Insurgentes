import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from '@mui/material/ListItemText';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function SliderList({ albumSongs }) {

  return (
    <div className='slider-list' style={{ display: "flex", justifyContent: "center", marginTop: "20vh",}}>
      <List dense sx={{ width: '55%', maxwidth: 360, bgcolor: '#2A2A2C', color: "white"}}>
        {albumSongs.map((song) => {
          const labelId = `secondary-label-${song}`;
          return (
            <ListItem key={song} disablePadding >
              <ListItemButton>
                  <LibraryMusicIcon />
                  <ListItemText id={labelId} primary={song}/>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default SliderList;