import React from 'react';
import sprites from '../../styles/sprites.svg' ;
import { Svg } from './style/SvgIcon.styled';
interface SvgIconProps {
  id: string;
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ id, className }) => (
  <Svg className={className}>
    <use href={`${sprites}#${id}`} />
  </Svg>
);

export default SvgIcon;