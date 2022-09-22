import {Box, Button, Tab, Tabs} from '@mui/material';
import {useState} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';

const TapPanel = (props) => {
  const {children, value, index, ...other} = props;
  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    ></Box>
  );
};

export default function FindInfo() {
  const [tabState, setTabstate] = useState(0);
  const handleChange = (e, tabSelect) => setTabstate(tabSelect);

  return (
    <>
      <Box>
        <Tabs value={tabState} onChange={handleChange}>
          <Tab component={Link} to='id' label='아이디 찾기' />
          <Tab component={Link} to='password' label='비밀번호 찾기' />
        </Tabs>
      </Box>
      <Outlet />
    </>
  );
}
