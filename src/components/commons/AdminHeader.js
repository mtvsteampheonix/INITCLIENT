import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Typography
} from '@mui/material';

const menuList = [
  {code: 1, menuName: '개인 회원 관리', menuUrl: '/admin/member'},
  {code: 2, menuName: '기업 회원 관리', menuUrl: '/admin/member-ent'},
  {code: 3, menuName: '공통', menuUrl: '/admin/common'}
];

export default function AdminHeader() {
  return (
    <>
      <Box bgcolor='#4199E1' display='flex' alignItems='center' padding={2}>
        <Container disableGutters>
          <Grid container justifyContent='space-between' rowGap={5}>
            <Grid
              item
              sx='auto'
              display='flex'
              alignItems='center'
              component={Link}
              href='/'
              underline='none'
            >
              <Avatar
                variant='rounded'
                src='/adminLogo.svg'
                alt='logo'
                sx={{width: 50, height: 50}}
              ></Avatar>
              <Typography variant='h4' color='white' marginLeft={2}>
                INIT{' '}
                <Typography component='span' color='yellow'>
                  관리자 모드
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              display='flex'
              alignItems='center'
              justifyContent='space-around'
            >
              {menuList.map((menu) => (
                <>
                  <Link
                    key={menu.code}
                    href={`${menu.menuUrl}`}
                    color='#fff'
                    underline='none'
                    fontWeight='bold'
                  >
                    {menu.menuName}
                  </Link>
                </>
              ))}
            </Grid>
            <Grid item xs={12} sm='auto' display='flex' alignItems='center'>
              <Typography>
                어서오세요,{' '}
                <Typography component='span' color='yellow'>
                  관리자
                </Typography>
                님
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider sx={{width: '100%'}} />
    </>
  );
}
