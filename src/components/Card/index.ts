import CardWrapper from './Card';
import CardBody from './CardBody';
import CardHeading from './CardHeading';

type CardComponent = typeof CardWrapper & {
  Heading: typeof CardHeading;
  Body: typeof CardBody;
};

const Card = CardWrapper as CardComponent;
Card.Heading = CardHeading;
Card.Body = CardBody;

export default Card;
