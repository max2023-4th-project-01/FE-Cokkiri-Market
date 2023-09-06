import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { ColorType, FontType } from '../../styles/designSystem';

type MenuItemProps = {
  font?: FontType;
  color?: ColorType;
  onClick: () => void;
  children: ReactNode;
};

export function MenuItem({
  font = 'availableDefault16',
  color = 'neutralTextStrong',
  onClick,
  children,
}: MenuItemProps) {
  return (
    <Item $font={font} $color={color} onClick={onClick}>
      {children}
    </Item>
  );
}

const Item = styled.li<{ $font: FontType; $color: ColorType }>`
  width: 240px;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutralBorder};
  font: ${({ theme, $font }) => theme.font[$font]};
  color: ${({ theme, $color }) => theme.color[$color]};

  &:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.neutralBackgroundBlur};
  }
`;
