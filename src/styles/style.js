import styled from "styled-components";

export const FormCenter = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || 'column'};
`;
export const BaseInputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom || 'var(--gap-md)'};
`;
export const BaseInput = styled.input`
  width: var(--ip-big-w);
  height: var(--ip-big-h);
  border-width: 1px;
  border-style: solid;
  border-radius: var(--bd-rd-sm);
  padding: 0 var(--gap-sm);
  transition: var(--trans);
  border-color: ${(props) => props.borderColor || 'var(--maincolor)'};
  color: ${(props) => props.color || 'var(--white)'};
  background: ${(props) => props.background || 'transparent'};
  &:focus{
    box-shadow: var(--shadow);
    transition: var(--trans);
  }
`;
export const BaseLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--fz-md);
  font-weight: bold;
  text-transform: uppercase;
  pointer-events: none;
  transition: var(--trans);
  color: ${(props) => props.color || 'var(--white)'};
  background: ${(props) => props.background || 'var(--night)'};
  ${BaseInput}:focus ~ &,
  ${BaseInput}:valid ~ & {
    top: 0;
    font-size: var(--fz-sm);
    transition: var(--trans);
  };
`;
export const BaseButton = styled.button`
  position: relative;
  display: block;
  width: var(--ip-big-w);
  height: var(--ip-big-h);
  text-align: center;
  border-radius: var(--bd-rd-sm);
  cursor: pointer;
  transition: var(--trans);
  margin-left: auto;
  margin-right: auto;
  color: ${(props) => props.color || 'var(--black)'};
  background: ${(props) => props.background || 'var(--yellow)'};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 'var(--gap-sm)'};
  &:hover {
    transition: var(--trans);
    background: ${(props) => props.hoverBg || 'var(--maincolor)'};
  };
`;
export const SmallButton = styled.button`
  width: var(--btn-sm-w);
  height: var(--btn-sm-h);
  border-radius: var(--bd-rd-sm);
  font-size: var(--fz-md);
  color: var(--black);
  background: ${(props) => props.background || 'var(--yellow)'};
  margin-bottom: ${(props) => props.marginBottom || 'var(--gap-sm)'};
  transition: var(--trans);
  cursor: pointer;
  &:hover{
    background: ${(props) => props.hoverBg || 'var(--maincolor)'};
    transition: var(--trans);
    box-shadow: ${(props) => props.shadow || 'none'};
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`;
export const ModalBack = styled.div`
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  background: var(--modalBack);
`;
export const ModalContent = styled.div`
  position: absolute;
  left: 50%; top: 50%; transform: translate(-50%,-50%);
  display: flex; justify-content: center; align-items: center;
  flex-direction: column;
  width: ${(props) => props.width || '70%'};
  height: ${(props) => props.height || '65vh'};
  padding: var(--gap-big);
  background: ${(props) => props.background || 'var(--white)'};
  border-radius: var(--bd-rd-big);
  z-index: 10;
  @media (max-width: 768px){
    width: calc(100% - var(--gap-large));
    padding: var(--gap-md);
  }
`;
