import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import { RotatingWord } from './RotatingWord'

const AppContainer = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLogo = styled.img`
  height: 40vmin;
`

const words: string[] = [
  'reload',
  'update',
  'make awesome happen',
  'test1',
  'test2',
  'test3',
]

const App: React.FC = () => {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to&nbsp;
          <RotatingWord words={words} />
        </p>
      </AppHeader>
    </AppContainer>
  )
}

export default App
