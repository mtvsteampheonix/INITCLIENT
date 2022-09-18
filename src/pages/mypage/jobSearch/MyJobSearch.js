import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyJobSearchList from '../../../components/mypage/jobSearch/MyJobSearchList';
import {Container} from '@mui/system';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function MyJobSearch() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="메뉴1" {...a11yProps(0)} />
        <Tab label="메뉴2" {...a11yProps(1)} />
        <Tab label="메뉴3" {...a11yProps(2)} />
        <Tab label="메뉴4" {...a11yProps(3)} />
        <Tab label="My구직공고" {...a11yProps(4)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        메뉴1
      </TabPanel>
      <TabPanel value={value} index={1}>
        메뉴2
      </TabPanel>
      <TabPanel value={value} index={2}>
        메뉴3
      </TabPanel>
      <TabPanel value={value} index={3}>
        메뉴4
      </TabPanel>
      <TabPanel value={value} index={4}>
        <MyJobSearchList/> 
      </TabPanel>
    </Box>
   
  );
}
