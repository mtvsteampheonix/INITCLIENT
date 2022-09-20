import {
  Grid,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {styled, useTheme} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import {useSelector, useDispatch} from 'react-redux';
import {SELECT_SIDEBAR} from './../modules/mypage/myPageSidebarModule';
import HomeIcon from '@mui/icons-material/Home';
import MyPageIndex from './../pages/mypage/member/MypageIndex';
import EditMemberInfo from './../pages/mypage/member/EditMemberInfo';
import MyProfile from './../pages/mypage/member/MyProfile';
import ApplyHistory from './../pages/mypage/member/ApplyHistory';
import InterviewHistory from './../pages/mypage/member/InterviewHistory';

const drawerWidth = 300;

const navList = [
  '마이페이지 홈',
  '회원 정보',
  '마이프로필',
  '지원 내역',
  '면접 제안 내역'
];
const iconList = [
  <HomeIcon />,
  <InfoIcon />,
  <ApartmentIcon />,
  <HistoryEduIcon />,
  <HandshakeIcon />
];

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({theme, open}) => ({
  top: 'auto',
  right: 'auto',
  left: 'auto',
  position: 'relative',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

export default function MyPageLayout() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const sidebarSelector = useSelector((state) => state.myPageSidebarReducer);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const onclickSidebarHandler = (index) => {
    dispatch({type: SELECT_SIDEBAR, payload: index});
  };
  return (
    <>
      <AppBar open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
            edge='start'
            sx={{mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            개인 회원 마이 페이지
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navList.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => onclickSidebarHandler(index)}>
                <ListItemIcon>{iconList[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main>
        {sidebarSelector.map((isSel, index) => {
          // 마이페이지 링크 연결
          const pageList = [
            <MyPageIndex key={index} />, // 마이페이지 홈
            <EditMemberInfo key={index} />, // 회원 정보
            <MyProfile key={index} />, // 마이프로필
            <ApplyHistory key={index} />, // 지원내역
            <InterviewHistory key={index} /> // 면접 제안 내역
          ];
          return isSel ? pageList[index] : null;
        })}
      </Main>
    </>
  );
}
