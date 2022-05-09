import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from '@mui/material/ListItemText';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

function SliderList({ albumSongs }) {

  return (
    <div className='slider-list'>
    <h2>Songs From Album: </h2>
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: '#DCD9D0' }}>
        {albumSongs.map((song) => {
          const labelId = `secondary-label-${song}`;
          return (
            <ListItem key={song} disablePadding >
              <ListItemButton>
                  <AudiotrackIcon />
                  <ListItemText id={labelId} primary={song} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default SliderList;