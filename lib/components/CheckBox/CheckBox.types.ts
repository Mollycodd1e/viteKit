import { ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';

export type CheckBoxVariant = 'light' | 'dark';

export type CheckBoxSize = 'small' | 'medium' | 'large';

export interface CheckBoxProps {
  children?: ReactNode;
  isChecked: boolean | undefined;
  error?: boolean;
  modifierClassesStyle?: string[];
  emitIsChecked?: (isChecked: boolean) => void;
  onClick?: () => void;
  variant?: CheckBoxVariant;
  size_s?: boolean;
  size_l?: boolean;
  size_m?: boolean;
  [key: string]: unknown;
}

export type CheckBoxComponent = ForwardRefExoticComponent<
  CheckBoxProps & RefAttributes<HTMLInputElement>
>;
