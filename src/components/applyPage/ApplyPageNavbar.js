import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import {useDispatch} from 'react-redux';
import {GET_LIST_NUMBER} from '../../modules/applyPageModule';

function ApplyPageNavbar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const dispatch = useDispatch();
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    dispatch({type: GET_LIST_NUMBER, payload: index});
  };
  return (
    <>
      <Box sx={{bgcolor: 'background.paper'}} width='160px'>
        <List component='nav' aria-label='main mailbox folders'>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary='이력서' />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary='포트폴리오' />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary='자기소개서' />
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}

export default ApplyPageNavbar;
