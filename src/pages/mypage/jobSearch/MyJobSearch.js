import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyJobSearchList from '../../../components/mypage/jobSearch/MyJobSearchList';
import {Container} from '@mui/system';
import {Button} from '@mui/material';
import AddJobSearch from './AddJobSearch';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /* 구직공고작성 탭으로 이동*/
  const toWrite = () => {
    setValue(1);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='My구직공고조회' {...a11yProps(0)} />
          <Tab label='구직공고작성' {...a11yProps(1)} />
        </Tabs>
      </Box>
      {/* [위]: 탭 메뉴 // [아래]: 탭 메뉴 클릭시 출력 화면 */}
      <TabPanel value={value} index={0}>
        <MyJobSearchList />
        <div style={{display:'flex', justifyContent:'center'}}>
        <Button variant='contained' onClick={toWrite}>
          공고작성
        </Button>
        </div>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddJobSearch />
      </TabPanel>
    </Box>
  );
}
