interface ListProps {
  items: string[];
  itemHeight: number;
  itemColor: string;
}

export const List: React.FunctionComponent<ListProps> = (props) => {
  const {
    items,
    itemHeight,
    itemColor
  } = props;
  return (<div>
    items.map((item) =>
      <ListItem
        itemHeight={itemHeight}
        itemColor={itemColor}
      />
    )
  </div>);
}

type ListItemProps = Pick<
  ListProps,
  | 'itemHeight'
  | 'itemColor'
>;


// interface ListItemProps {
//     itemHeight: number;
//     itemColor: string;
// }

export const ListItem: React.FunctionComponent<ListItemProps> =
  ({ itemHeight, itemColor }) =>
    <div style={({ height: itemHeight, color: itemColor })}></div>