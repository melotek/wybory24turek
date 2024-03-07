import React from 'react';


// Corrected List component
type ListBoxProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

const List = <T extends unknown>({ items, renderItem }: ListBoxProps<T>) => {
  return <>{items.map((item, index) => <li style={{
    display: "flex",
    justifyContent: "center",

  }} key={index}>{renderItem(item)}</li>)}</>;
};
export default List;