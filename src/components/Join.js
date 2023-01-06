import React, { Fragment } from 'react'
import styled from 'styled-components';

// Private Check
const PrivateWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%; height: 100%;
    /* max-width: var(--max-w-pc); */
    &:after {
        content: '';
        position: absolute;
        left: 0; right: 0; top: 0; bottom: 0;
        background: var(--night);
        opacity: .7;
    }
`;
const PrivateBox = styled.div`
    position: relative;
    z-index: 1;
`;
const PrivateCheck = styled.input`
    position: relative;
    opacity: 0;
    visibility: hidden;
`;
const PrivateLabel = styled.label`
    position: relative;
    padding-left: 20px;
    display: block;
    margin-bottom: var(--gap-sm);
    color: var(--white);
    cursor: pointer;
    &:after {
        content: '';
        position: absolute;
        left: 0; top: 3px; width: 12px; height: 12px; border: 1px solid var(--white);
    }
    &:before {
        content: '';
        position: absolute;
        z-index: 1;
        left: 2px; top: 4px; width: 7px; height: 5px;
        border-bottom: 2px solid #fff;
        border-left: 2px solid #fff;
        transform: rotate(-45deg);
        opacity: 0;
    }
    ${PrivateCheck}:checked ~ &:after {
        background: var(--maincolor);
        border-color: var(--maincolor);
    }
    ${PrivateCheck}:checked ~ &:before {
        opacity: 1;
    }
`;
const PrivateTextarea = styled.div`
    border: 1px solid var(--gray);
    width: var(--ip-big-w);
    height: calc(var(--ip-big-h) * 2);
    overflow-y: scroll;
    padding: var(--gap-sm);
    font-size: var(--fz-sm);
    line-height: 1.2;
    background: #fff;
`;
// Join Form
const JoinForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const JoinBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: var(--gap-md);
`;
const JoinIp = styled.input`
    width: var(--ip-big-w);
    height: var(--ip-big-h);
    border: 1px solid var(--maincolor);
    border-radius: var(--bd-rd-sm);
    padding: 0 var(--gap-sm);
    transition: var(--trans);
    &:focus{
        box-shadow: var(--shadow);
        transition: var(--trans);
    }
`;
const JoinLabel = styled.label`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--fz-md);
    font-weight: bold;
    text-transform: uppercase;
    pointer-events: none;
    color: var(--gray);
    background: #fff;
    transition: var(--trans);
    ${JoinIp}:focus ~ &,
    ${JoinIp}:valid ~ & {
        top: 0;
        font-size: var(--fz-sm);
        transition: var(--trans);
    };
`;
const JoinBtn = styled.button`
    position: relative;
    width: var(--ip-big-w);
    height: var(--ip-big-h);
    text-align: center;
    background: var(--maincolor);
    border-radius: var(--bd-rd-sm);
    color: #fff;
    cursor: pointer;
    transition: var(--trans);
    &:hover {
        box-shadow: var(--shadow);
        transition: var(--trans);
    };
    ${PrivateWrap} > & {
        z-index: 10;
        margin-top: var(--gap-md)
    }
`;



const PrivateData = () => {
    return (
        <PrivateWrap>
            <PrivateBox>
                <PrivateCheck type='checkbox' id='privateCheckAll' title='privateCheckAll' />
                <PrivateLabel for='privateCheckAll'>약관 전체 동의</PrivateLabel>
            </PrivateBox>
            <PrivateBox>
                <PrivateCheck type='checkbox' id='privateCheck1' title='privateCheck1' required />
                <PrivateLabel for='privateCheck1'>이용약관 동의</PrivateLabel>
                <PrivateTextarea>
                    여러분을 환영합니다.
                    네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                    네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                    다양한 네이버 서비스를 즐겨보세요.
                    네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
                    여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의 구체적인 내용은 각 서비스 상의 안내, 공지사항, 네이버 웹고객센터(이하 ‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다.
                    네이버는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다. 다만, '청소년보호법' 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한 필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여 제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을 제한하는 경우가 있습니다. 자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다.
                </PrivateTextarea>
            </PrivateBox>
            <PrivateBox>
                <PrivateCheck type='checkbox' id='privateCheck2' title='privateCheck2' required />
                <PrivateLabel for='privateCheck2'>이용약관 동의</PrivateLabel>
                <PrivateTextarea>
                    여러분을 환영합니다.
                    네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                    네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                    다양한 네이버 서비스를 즐겨보세요.
                    네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
                    여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의 구체적인 내용은 각 서비스 상의 안내, 공지사항, 네이버 웹고객센터(이하 ‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다.
                    네이버는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다. 다만, '청소년보호법' 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한 필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여 제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을 제한하는 경우가 있습니다. 자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다.
                </PrivateTextarea>
            </PrivateBox>
            <PrivateBox>
                <PrivateCheck type='checkbox' id='privateCheck3' title='privateCheck3' required />
                <PrivateLabel for='privateCheck3'>이용약관 동의</PrivateLabel>
                <PrivateTextarea>
                    여러분을 환영합니다.
                    네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                    네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                    다양한 네이버 서비스를 즐겨보세요.
                    네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
                    여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의 구체적인 내용은 각 서비스 상의 안내, 공지사항, 네이버 웹고객센터(이하 ‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다.
                    네이버는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다. 다만, '청소년보호법' 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한 필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여 제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을 제한하는 경우가 있습니다. 자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다.
                </PrivateTextarea>
            </PrivateBox>
            <JoinBtn>가입하기</JoinBtn>
        </PrivateWrap>
    )
}

const Join = () => {
    return (
        <div className='wrap'>
            <JoinForm action='' method='get'>
                <JoinBox>
                    <JoinIp type='text' title='joinId' id='joinId' required />
                    <JoinLabel for='joinId'>아이디</JoinLabel>
                </JoinBox>
                <JoinBox>
                    <JoinIp type='password' title='joinPw' id='joinPw' required />
                    <JoinLabel for='joinPw'>비밀번호</JoinLabel>
                </JoinBox>
                <JoinBox>
                    <JoinIp type='password' title='joinPwConfirm' id='joinPwConfirm' required />
                    <JoinLabel for='joinPwConfirm'>비밀번호 확인</JoinLabel>
                </JoinBox>
                <JoinBtn>가입하기</JoinBtn>
            </JoinForm>
            <PrivateData/>
        </div>
    )
}

export default Join