// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  list-style-type: none;
  margin-right: 8px;
  margin-bottom: 8px;
`

export const DirectionButton = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  height: 35px;
  width: 100px;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
