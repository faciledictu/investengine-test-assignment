import { TCustomComponent } from '@/components/index.types';
import clsx from 'clsx';
import styles from './Row.module.scss';

export interface IRowCustomProps {}

type TCardComponent = TCustomComponent<'div', IRowCustomProps>;

const Row: TCardComponent = ({
  as: Component = 'div',
  className,
  children,
  ...restProps
}) => {
  return (
    <Component className={clsx(className, styles.row)} {...restProps}>
      {children}
    </Component>
  );
};

export default Row;
