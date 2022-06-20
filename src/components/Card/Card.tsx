import React from 'react';
import { CardContainer } from './Card.styles';

type CardProps = {
  text?: string
}

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>
}