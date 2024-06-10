import { TCustomComponent } from '@/components/index.types';
import clsx from 'clsx';
import styles from './Text.module.scss';

type FontSize = 16 | 18 | 24 | 32 | 48;

export interface ITextCustomProps {
  fontSize?: FontSize;
  font?: 'body' | 'heading';
}

type TTextComponent = TCustomComponent<'p', ITextCustomProps>;

const Text: TTextComponent = ({
  as: Component = 'p',
  fontSize = 'S',
  font = 'body',
  className,
  children,
}) => {
  return (
    <Component
      className={clsx(className, styles[font], styles[`fontSize${fontSize}`])}>
      {children}
    </Component>
  );
};

export default Text;
