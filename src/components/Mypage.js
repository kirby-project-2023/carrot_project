import React from 'react'

    {/* 닉네임네 당근밭 띄우기 */}
    {/*아이디에 맞는 편지 밭에 뿌리기*/}
    {/*당근 누르면 편지 뜨게 하기 -> map? 모르겠숴요*/}

const Mypage = ({nickname, userInfo}) => {
    return (
        <div>
        <div>짜잔 테스트 {nickname}네 당근밭</div>
        <div>{userInfo[0].field}</div>
        </div>
    )
}

export default Mypage