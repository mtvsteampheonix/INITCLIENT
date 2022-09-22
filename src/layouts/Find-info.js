import {Button, Tabs} from '@mui/material';
import {Container} from '@mui/material/Container';
import {Link} from 'react-router-dom';
export default function FindInfo() {
  return (
    <>
      <Tabs></Tabs>
      탭으로 분류할 생각입니다.
      <Button component={Link} to='find-id' />
      <Button component={Link} to='find-password' />
    </>
  );
}
