/**
 * 마이페이지 기업회원 페이지 입니다.
 */

import {
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
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ReceiptIcon from '@mui/icons-material/Receipt';
import {useSelector, useDispatch} from 'react-redux';
import {SELECT_SIDEBAR} from '../modules/mypage/myPageSidebarModule';
import MyPageIndex from './../pages/mypage/member/MypageIndex';
import EditMemberInfo from './../pages/mypage/member/EditMemberInfo';
import MyProfile from './../pages/mypage/member/MyProfile';
import ApplyHistory from './../pages/mypage/member/ApplyHistory';
import InterviewHistory from './../pages/mypage/member/InterviewHistory';
import EditEntMemberInfo from '../pages/mypage/ent-member/EditEntMemberInfo';
import EntMypageIndex from '../pages/mypage/ent-member/EntMypageIndex';
import PaymentHistory from '../pages/mypage/ent-member/PaymentHistory';
import MyProduct from './../pages/mypage/ent-member/MyProduct';
import MyJobSearch from './../pages/mypage/jobSearch/MyJobSearch';

const drawerWidth = 300;

// 사이드바 메뉴 리스트
const navList = [
  '마이페이지 홈',
  '담당자 정보',
  '나의 상품',
  '결제 내역',
  'My구직공고'
];
// 사이드바 메뉴 앞에 달 아이콘 리스트
const iconList = [
  <HomeIcon />,
  <InfoIcon />,
  <ShoppingBagIcon />,
  <ReceiptIcon />
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

export default function MyPageEntLayOut() {
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
            기업 회원 마이 페이지
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
            <EntMypageIndex key={index} />, // 마이페이지 홈
            <EditEntMemberInfo key={index} />, // 기업 회원 정보 수정
            <MyProduct key={index} />, // 나의 상품함
            <PaymentHistory key={index} />, // 결제 내역
            <MyJobSearch key={index} /> //
          ];
          return isSel ? pageList[index] : null;
        })}
      </Main>
    </>
  );
}
