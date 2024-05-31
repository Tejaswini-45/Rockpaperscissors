import {OptionListItem, OptionImage, GameOptionButton} from './styledComponents'

const GameOptions = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {id, image} = optionDetails

  const userChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={userChoice}
      >
        <OptionImage src={image} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}
export default GameOptions
