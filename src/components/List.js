import React from "react";

// static list is written
const List = () => {
  const items = [
    { id: 1, name: "Invoice 1" },
    { id: 2, name: "Invoice 2" },
    { id: 3, name: "Invoice 3" },
  ];

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default List;
