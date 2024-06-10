import { Text } from '@/components';
import { ITextCustomProps } from '@/components/Text';
import { TCustomComponent } from '../index.types';

export interface ICardHeadingCustomProps
  extends Omit<ITextCustomProps, 'font'> {}

type TCardHeadingComponent = TCustomComponent<'h2', ICardHeadingCustomProps>;

const CardHeading: TCardHeadingComponent = ({
  as,
  fontSize = 32,
  className,
  children,
}) => {
  const elem = as ?? 'h2';
  return (
    <Text as={elem} fontSize={fontSize} className={className} font="heading">
      {children}
    </Text>
  );
};
export default CardHeading;
