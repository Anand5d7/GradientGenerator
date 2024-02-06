// Style your elements here

import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  width: 55vw;
  padding: 30px;
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`

export const Description = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 600;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0px;
  padding-left: 15px;
  margin: 0px;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ColorInputAndValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`
export const ColorValue = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
`
export const ColorInput = styled.input`
  height: 45px;
  width: 90px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`
export const Button = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  border-radius: 6px;
  height: 30px;
  width: 100px;
  border: none;
  outline: none;
  cursor: pointer;
`
