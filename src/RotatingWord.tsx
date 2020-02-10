import React from 'react'
import styled, { keyframes } from 'styled-components'

const ANIMATION_PER_ITEM = 2
const WordContainer = styled.div`
  display: inline;
`

const animate = (wordCount: number) => {
  const cycle = 100 / wordCount
  const animationEnd = cycle * 1.2
  return keyframes`
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  ${animationEnd * 0.3}%, ${animationEnd * 0.7}% {
    transform: translateY(0px);
    opacity: 1;
  }
  ${animationEnd}%, 100% {
    transform: translateY(30px);
    opacity: 0;
  }
`
}

const WordSpan = ({
  wordCount,
  index,
  ...props
}: { wordCount: number; index: number } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>) => <span {...props} />

const Word = styled(WordSpan)`
  color: #0087ff;
  animation: ${props => animate(props.wordCount)}
    ${props => props.wordCount * ANIMATION_PER_ITEM}s linear infinite;
  animation-delay: ${props => props.index * ANIMATION_PER_ITEM}s;
  animation-fill-mode: both;
  position: absolute;
`
export const RotatingWord: React.FC<{
  words: string[]
}> = ({ words }) => {
  return (
    <WordContainer>
      {words.map((word, index) => (
        <Word key={word} wordCount={words.length} index={index}>
          {word}
        </Word>
      ))}
    </WordContainer>
  )
}
