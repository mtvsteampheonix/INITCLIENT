import {Margin} from '@mui/icons-material';
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
  Button,
  Stack,
  Grid
} from '@mui/material';
import {Box} from '@mui/system';
import {useDispatch, useSelector} from 'react-redux';
import {SET_TERMSCHECKED} from '../../../modules/regist/termsModule';
import {Link} from 'react-router-dom';

export default function AgreeTerms() {
  const termsState = useSelector((state) => state.termsReducer);
  const dispatch = useDispatch();
  const {checked, details} = termsState;
  const AllcheckHandleChange = (event) => {
    dispatch({
      type: SET_TERMSCHECKED,
      payload: {
        service: event.target.checked,
        personalInfo: event.target.checked,
        advertising: event.target.checked
      }
    });
  };

  const handleChange = (event) => {
    dispatch({
      type: SET_TERMSCHECKED,
      payload: {
        ...checked,
        [event.target.name]: event.target.checked
      }
    });
  };

  const isCheckedRequired = () => {
    if (checked.service && checked.personalInfo) {
      return true;
    }
    return false;
  };

  const childrenCheckBox = (
    <Grid item paddingLeft={2}>
      <FormControlLabel
        label='이용약관 동의 (필수)'
        control={
          <Checkbox
            name='service'
            checked={checked.service}
            onChange={handleChange}
          />
        }
      />
      <Typography height={100} border='1px solid gray' boxSizing='border-box'>
        이용약관에 대한내용
      </Typography>
      <FormControlLabel
        label='개인정보 수집 및 이용동의 (필수)'
        control={
          <Checkbox
            name='personalInfo'
            checked={checked.personalInfo}
            onChange={handleChange}
          />
        }
      />
      <Typography height={100} border='1px solid'>
        개인정보 수집 및 이용동의에 대한 내용
      </Typography>
      <FormControlLabel
        label='광고성 정보 수신 동의 (선택)'
        control={
          <Checkbox
            name='advertising'
            checked={checked.advertising}
            onChange={handleChange}
          />
        }
      />
      <Typography height={100} border='1px solid'>
        광고성 정보 수신 동의에 대한 내용 <br />
        내용을 작성해보자
      </Typography>
    </Grid>
  );
  return (
    <>
      <Stack>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <img style={{width: '300px'}} src='/titleLogo.svg' alt='titleLogo' />
        </Box>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={
                  checked.service && checked.advertising && checked.personalInfo
                }
                onChange={AllcheckHandleChange}
              />
            }
            label='Init필수동의 항목 및 개인정보 수집 및 이용 동의(선택), 광고성 정보 수신 동의(선택)에 일괄 동의합니다.'
          />
          {childrenCheckBox}
        </FormGroup>
        <Stack direction='row' spacing={5} height={70} margin={5}>
          {isCheckedRequired() ? (
            <>
              <Button
                component={Link}
                to='./input'
                variant='contained'
                sx={{
                  width: '100%',
                  height: '100%'
                }}
              >
                개인 회원
              </Button>

              <Button
                component={Link}
                to='./input-ent'
                variant='contained'
                sx={{
                  width: '100%',
                  height: '100%'
                }}
              >
                기업 회원
              </Button>
            </>
          ) : (
            <>
              <Button
                variant='contained'
                sx={{
                  width: '100%'
                }}
                disabled
              >
                필수 항목을 모두 동의 해주세요
              </Button>
              <Button
                variant='contained'
                sx={{
                  width: '100%'
                }}
                disabled
              >
                필수 항목을 모두 동의 해주세요
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </>
  );
}
