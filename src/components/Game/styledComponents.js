import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`
export const Option = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreCardContainer = styled.div`
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ParagraphScore = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-weight: bold;
  font-size: 16px;
`

export const ScoreNumber = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-weight: bold;
  font-size: 28px;
`

export const GameViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 60vh;
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const GameOptionsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 0px;
  margin-left: 0px;
  flex-wrap: wrap;
  max-width: 480px;
`

export const PopUpButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Roboto';
  color: #223a5f;
  font-weight: 400;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  outline: none;
`

export const PopupImage = styled.img`
  width: 90%;
  align-self: center;
`
export const PopUpBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`

export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
`
export const SelectedOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 600px;
`
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GameParticipantText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
  font-size: 28px;
`
export const GameParticipantChoiceImg = styled.img`
  width: 170px;
  height: 170px;
`

export const ResultText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

export const PlayAgainButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Roboto';
  color: #223a5f;
  font-weight: 400;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  outline: none;
  align-self: center;
`
