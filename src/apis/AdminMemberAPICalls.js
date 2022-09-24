import {GET_SIGNUPLIST} from './../modules/admin/signupplzModule';

export function callGetSignupplzListAPI() {
  return async function getSignupplzList(dispatch, getState) {
    const tempAPIResult = [
      {
        singupNum: 1,
        id: 'test01',
        name: '정형둔',
        companyName: '무한상사',
        signupDate: '2022/08/30',
        ceoName: '유재속',
        email: 'helpme@example.com',
        siteUrl: 'https://mtvs.kr/user/main',
        phone: '010-1234-5678',
        registNumber: '493-30-00631'
      },
      {
        singupNum: 2,
        id: 'test02',
        name: '손창우',
        companyName: '불사조',
        signupDate: '2022/09/02',
        ceoName: '김승우',
        email: 'phoenix@example.com',
        siteUrl: 'https://mtvs.kr/user/main',
        phone: '010-1234-5678',
        registNumber: '493-30-00631'
      },
      {
        singupNum: 3,
        id: 'test03',
        name: '테스트유저1',
        companyName: '불사조',
        signupDate: '2022/09/02',
        ceoName: '김승우',
        email: 'phoenix@example.com',
        siteUrl: 'https://mtvs.kr/user/main',
        phone: '010-1234-5678',
        registNumber: '493-30-00631'
      },
      {
        singupNum: 4,
        id: 'test04',
        name: '테스트유저2',
        companyName: '불수조',
        signupDate: '2022/09/02',
        ceoName: '김상유',
        email: 'fireBool@example.com',
        siteUrl: 'https://mtvs.kr/user/main',
        phone: '010-1234-5678',
        registNumber: '493-30-00631'
      },
      {
        singupNum: 5,
        id: 'test05',
        name: '이구역',
        companyName: '불일조',
        signupDate: '2022/09/02',
        ceoName: '박승혁',
        email: 'fireOne@example.com',
        siteUrl: 'https://mtvs.kr/user/main',
        phone: '010-1234-5678',
        registNumber: '493-30-00631'
      },
      {
        singupNum: 6,
        id: 'test06',
        name: '테스터',
        companyName: '쿠글',
        signupDate: '2022/09/02',
        ceoName: '인자강',
        email: 'Koogle@example.com',
        siteUrl: 'https://mtvs.kr/user/main',
        phone: '010-1234-5678',
        registNumber: '493-30-00631'
      },
      {
        singupNum: 7,
        id: 'test07',
        name: '김자국',
        companyName: '메타',
        signupDate: '2022/09/02',
        ceoName: 'John',
        email: 'moonie@example.com',
        siteUrl: 'https://mtvs.kr/user/main',
        phone: '010-1234-5678',
        registNumber: '493-30-00631'
      },
      {
        singupNum: 8,
        id: 'test08',
        name: '김국자',
        companyName: '메타푸드',
        signupDate: '2022/09/02',
        ceoName: '백죵원',
        email: 'metafood@example.com',
        siteUrl: 'https://mtvs.kr/user/main',
        phone: '010-1234-5678',
        registNumber: '493-30-00631'
      },
      {
        singupNum: 9,
        id: 'tkffuwntpdy',
        name: '비와이',
        companyName: '쇼미더머니',
        signupDate: '2022/09/02',
        ceoName: '김진푝',
        email: 'by@example.com',
        siteUrl: 'https://mtvs.kr/user/main',
        phone: '010-1234-5678',
        registNumber: '493-30-00631'
      }
    ];
    dispatch({type: GET_SIGNUPLIST, payload: tempAPIResult});
  };
}
