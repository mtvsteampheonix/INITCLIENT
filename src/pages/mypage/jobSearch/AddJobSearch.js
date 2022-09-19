import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function AddJobSearch() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <h3>상세정보작성</h3>
      <div style={{fontSize: 20}}>
        <span>
          <label htmlFor='career'>경력</label>
          <select id='career' name='career' style={{fontSize: 20}}>
            <option value={'무관'}>무관</option>
            <option value={'신입'}>신입</option>
            <option value={'1년차'}>1년 경력</option>
            <option value={'2년차'}>2년 경력</option>
            <option value={'3년차'}>3년 경력</option>
            <option value={'4년차'}>4년 경력</option>
            <option value={'5년차'}>5년 경력</option>
            <option value={'6년차'}>6년 경력</option>
            <option value={'7년차'}>7년 경력</option>
            <option value={'8년차'}>8년 경력</option>
            <option value={'9년차'}>9년 경력</option>
          </select>
        </span>

        <span>
          <label htmlFor='salary'>연봉</label>
          <select name='salary' style={{fontSize: 20}}>
            <option value={'3,000 이상'}>3,000 이상</option>
            <option value={'3,500 이상'}>3,500 이상</option>
            <option value={'4,000 이상'}>4,000 이상</option>
            <option value={'4,500 이상'}>4,500 이상</option>
            <option value={'5,000 이상'}>5,000 이상</option>
            <option value={'5,500 이상'}>5,500 이상</option>
            <option value={'6,000 이상'}>6,000 이상</option>
            <option value={'7,000 이상'}>7,000 이상</option>
          </select>
        </span>

        <span>
          <label htmlFor='employees'>직원수</label>
          <select name='employees' style={{fontSize: 20}}>
            <option value={'5명 이상'}>5명 이상</option>
            <option value={'20명 이상'}>20명 이상</option>
            <option value={'50명 이상'}>50명 이상</option>
            <option value={'100명 이상'}>100명 이상</option>
          </select>
        </span>

        <sapn>
          <label htmlFor='educations'>학력</label>
          <select name='education' style={{fontSize: 20}}>
            <option value={'무관'}>무관</option>
            <option value={'고졸'}>고졸</option>
            <option value={'대졸'}>대졸</option>
          </select>
        </sapn>
      </div>
      <div>
        <TextField
          fullWidth
          margin='dense'
          required
          id='title'
          label='제목'
          placeholder='제목을 입력하세요'
        />
        <TextField
          fullWidth
          id='outlined-textarea'
          label='내용'
          placeholder='Placeholder'
          multiline
          minRows={8}
          InputProps={{sx: {height: '200px'}}}
        />

        <Button variant='contained'>작성</Button>
        <Button variant='outlined'>목록</Button>
      </div>
    </>
  );
}
