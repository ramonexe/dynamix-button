import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface BotaoProps {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const StyledButton = styled(motion.button)<{ temIcone: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => (props.temIcone ? '0' : '8px')};
  padding: 0 12px;
  height: 40px;
  font-size: 16px;
  color: white;
  background-color: #FF0000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;

  ${(props) =>
    props.temIcone &&
    `
    width: fit-content;
    padding: 0;
    justify-content: center;

    &:hover {
      width: ${props.temIcone ? 'fit-content' : 'none'};
      padding: 0 12px 0 0;
      justify-content: flex-start;
    }
  `}

  &:hover {
    background-color: #b31212;
  }
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
`;

const TextContainer = styled(motion.span)<{ temIcone: boolean }>`
  white-space: nowrap;
  opacity: ${(props) => (props.temIcone ? 0 : 1)};
  max-width: ${(props) => (props.temIcone ? '0' : '100%')};
  overflow: hidden;
  transition: opacity 0.2s ease, max-width 0.2s ease, margin-left 0.2s ease;

  ${StyledButton}:hover & {
    opacity: 1;
    max-width: 200px;
    margin-left: ${(props) => (props.temIcone ? '8px' : '0')};
  }
`;

const Botao: React.FC<BotaoProps> = ({ onClick, children, icon }) => {
  const temIcone = !!icon;
  const [hovered, setHovered] = React.useState(false);

  return (
    <StyledButton
      onClick={onClick}
      temIcone={temIcone}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        paddingRight: temIcone ? (hovered ? 12 : 0) : 12,
        justifyContent: temIcone ? (hovered ? 'flex-start' : 'center') : 'flex-start',
      }}
      transition={{ duration: 0.2 }}
    >
      {temIcone && <IconContainer>{icon}</IconContainer>}
      <TextContainer
        temIcone={temIcone}
        animate={{
          opacity: temIcone ? (hovered ? 1 : 0) : 1,
          maxWidth: temIcone ? (hovered ? 200 : 0) : '100%',
          marginLeft: temIcone ? (hovered ? 8 : 0) : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </TextContainer>
    </StyledButton>
  );
};

export default Botao;