import { Text } from '@/components';
import { ITextCustomProps } from '@/components/Text';
import { TCustomComponent } from '@/components/index.types';
import clsx from 'clsx';
import styles from './Card.module.scss';

export interface ICardBodyCustomProps
  extends Omit<ITextCustomProps, 'font' | 'fontSize'> {}

type TCardBodyComponent = TCustomComponent<'div', ICardBodyCustomProps>;

const CardBody: TCardBodyComponent = ({ as, className, children }) => {
  const elem = as ?? 'p';
  return (
    <Text
      as={elem}
      fontSize={16}
      className={clsx(className, styles.cardBody)}
      font="body">
      {children}
    </Text>
  );
};

export default CardBody;
