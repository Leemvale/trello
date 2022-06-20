import styled from 'styled-components';

type AddItemButtonProps = {
  dark?: Boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${props => (props.dark ? "#000": "#fff")};
  cursor: pointer;
  text-align: left;
  transition: background 85ms ease-in;
  max-width: 300px;
  width: 100%;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #ffffff52;
  }
`