import { Link } from "react-router-dom";
import styled from "styled-components";


const Header1 = styled.div`
    background-color: red;
`

function Header(){
    return(
        <Header1 className="header">
            <Link to='/' style={{ textDecoration : 'none'}}>
                <div>INIT</div>
            </Link>
            <Link to='/' style={{ textDecoration : 'none'}}>
                <div>채용공고</div>
            </Link>
            <Link to='/' style={{ textDecoration : 'none'}}>
                <div>상품</div>
            </Link>
            <Link to='/' style={{ textDecoration : 'none'}}>
                <div>인재풀조회</div>
            </Link>
            <Link to='/' style={{ textDecoration : 'none'}}>
                <div>마이페이지</div>
            </Link>
            <Link to='/' style={{ textDecoration : 'none'}}>
                <button type='button'>
                    로그인
                </button>
            </Link>
        </Header1>
    )
}

export default Header;