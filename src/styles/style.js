import styled from "styled-components";

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
  &:focus{
      box-shadow: var(--shadow);
      transition: var(--trans);
  }
    border-color: ${(props) => props.borderColor || 'var(--maincolor)'};
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
  ${BaseInput}:focus ~ &,
  ${BaseInput}:valid ~ & {
      top: 0;
      font-size: var(--fz-sm);
      transition: var(--trans);
  };
    color: ${(props) => props.color || 'var(--gray)'};
    background: ${(props) => props.background || 'var(--white)'};
`;
export const BaseButton = styled.button`
  position: relative;
  width: var(--ip-big-w);
  height: var(--ip-big-h);
  text-align: center;
  border-radius: var(--bd-rd-sm);
  cursor: pointer;
  transition: var(--trans);
  
    color: ${(props) => props.color || 'var(--white)'};
    background: ${(props) => props.background || 'var(--maincolor)'};
  &:hover {
    box-shadow: var(--shadow);
    transition: var(--trans);
      background: ${(props) => props.hoverBg || 'var(--maincolor)'};
  };
`;
