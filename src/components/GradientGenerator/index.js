import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  Description,
  GradientDirectionList,
  ColorPickerContainer,
  ColorInputAndValueContainer,
  ColorValue,
  ColorInput,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onGenerateGradientColor = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state

    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer>
        <ResponsiveContainer
          data-testid="gradientGenerator"
          gradientValue={gradientValue}
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <Description>Choose Direction</Description>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachValue => (
              <GradientDirectionItem
                key={eachValue.directionId}
                gradientValues={eachValue}
                isActive={activeGradientDirection === eachValue.value}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
              />
            ))}
          </GradientDirectionList>
          <Description>Pick the Colors </Description>
          <ColorPickerContainer>
            <ColorInputAndValueContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <ColorInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColor}
              />
            </ColorInputAndValueContainer>
            <ColorInputAndValueContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <ColorInput
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColor}
              />
            </ColorInputAndValueContainer>
          </ColorPickerContainer>
          <Button onClick={this.onGenerateGradientColor}>Generate</Button>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
