import { TCustomComponent } from '@/components/index.types';
import clsx from 'clsx';
import styles from './Card.module.scss';

export interface ICardCustomProps {
  variant?: 'primary' | 'pink' | 'withStripe';
  icon?: string;
}

type TCardComponent = TCustomComponent<'div', ICardCustomProps>;

const Card: TCardComponent = ({
  variant = 'primary',
  as: Component = 'div',
  children,
  className,
  icon,
  onClick,
  href,
  ...restProps
}) => {
  return (
    <Component
      className={clsx(
        className,
        styles.wrapper,
        styles[variant],
        icon && styles.withIcon,
        (href || onClick) && styles.hoverable
      )}
      onClick={onClick}
      href={href}
      {...restProps}>
      {icon && <img src={icon} className={styles.icon} alt="" />}
      {children}
    </Component>
  );
};

export default Card;
