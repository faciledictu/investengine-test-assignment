interface IAsProp<E extends React.ElementType> {
  as?: E;
}

export type TComponentProps<
  As extends React.ElementType,
  Props
> = React.ComponentPropsWithoutRef<As> & IAsProp<As> & Props;

export type TCustomComponent<E extends React.ElementType, P> = <
  T extends React.ElementType = E
>(
  props: TComponentProps<T, P>
) => React.ReactElement;
