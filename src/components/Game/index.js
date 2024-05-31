import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'

import GameOptions from '../GameOptions'

import {
  GameOptionsList,
  GameResultViewContainer,
  SelectedOptionsContainer,
  ItemsContainer,
  GameParticipantChoiceImg,
  GameParticipantText,
  ResultText,
  PlayAgainButton,
  AppContainer,
  PopupContainer,
  ResultContainer,
  OptionsContainer,
  Option,
  ScoreCardContainer,
  ParagraphScore,
  ScoreNumber,
  GameViewContainer,
  CloseButton,
  PopUpButton,
  PopUpBody,
  PopupImage,
} from './styledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class Game extends Component {
  state = {
    userChoice: '',
    opponentChoice: '',
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
  }

  onClickSetUserChoice = id => {
    this.setState(
      {
        userChoice: id,
        opponentChoice: this.getGameChoice(),
      },
      this.evaluateGame,
    )
  }

  onClickGoToGameView = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoicesList[randomIndex]
  }

  evaluateGame = () => {
    const {userChoice, opponentChoice} = this.state
    if (userChoice === opponentChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <GameOptionsList>
        {' '}
        {choicesList.map(eachOption => (
          <GameOptions
            key={eachOption.id}
            optionDetails={eachOption}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </GameOptionsList>
    )
  }

  renderGameWonView = () => {
    const {userChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const userChoicesObjectList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoicesObjectList[0]
    const opponentChoiceObjectList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )

    const opponentChoiceObject = opponentChoiceObjectList[0]
    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <ItemsContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImg
              src={userChoiceObject.image}
              alt="your choice"
            />
          </ItemsContainer>
          <ItemsContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImg
              src={opponentChoiceObject.image}
              alt="opponent choice"
            />
          </ItemsContainer>
        </SelectedOptionsContainer>
        <ResultText>YOU WON</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          Play Again
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameLostView = () => {
    const {userChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const userChoicesObjectList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoicesObjectList[0]
    const opponentChoiceObjectList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )

    const opponentChoiceObject = opponentChoiceObjectList[0]
    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <ItemsContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImg
              src={userChoiceObject.image}
              alt="your choice"
            />
          </ItemsContainer>
          <ItemsContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImg
              src={opponentChoiceObject.image}
              alt="opponent choice"
            />
          </ItemsContainer>
        </SelectedOptionsContainer>
        <ResultText>YOU LOSE</ResultText>

        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          Play Again
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameDrawView = () => {
    const {userChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const userChoicesObjectList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoicesObjectList[0]
    const opponentChoiceObjectList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )
    const opponentChoiceObject = opponentChoiceObjectList[0]
    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <ItemsContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImg
              src={userChoiceObject.image}
              alt="your choice"
            />
          </ItemsContainer>
          <ItemsContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImg
              src={opponentChoiceObject.image}
              alt="opponent choice"
            />
          </ItemsContainer>
        </SelectedOptionsContainer>
        <ResultText>IT IS DRAW</ResultText>

        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          Play Again
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <AppContainer>
        <ResultContainer>
          <OptionsContainer>
            <Option>
              ROCK
              <br />
              <br />
              PAPER
              <br />
              <br />
              SCISSORS
            </Option>
          </OptionsContainer>
          <ScoreCardContainer>
            <ParagraphScore> Score</ParagraphScore>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreCardContainer>
        </ResultContainer>
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>
        <PopupContainer>
          <Popup
            modal
            trigger={<PopUpButton type="button"> Rules</PopUpButton>}
            closeOnEscape
            window
          >
            {close => (
              <PopUpBody>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <CloseButton type="button" onClick={() => close()}>
                  {' '}
                  <RiCloseLine />
                </CloseButton>
              </PopUpBody>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}
export default Game
