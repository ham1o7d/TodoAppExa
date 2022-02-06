import React from "react";
import { ListItem } from "../@Types/TodoListItem";

interface IProps {
  item: ListItem;
  deleteItemCallback: (id: number) => void;
  editItemCallback: (id: number) => void;
}
export const TodoListItem = ({
  item,
  deleteItemCallback,
  editItemCallback,
}: IProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px solid gray",
        paddingBottom: "10px",
      }}
    >
      <li> {item.text} </li>{" "}
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => deleteItemCallback(item.id)}
      >
        Remove
      </button>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => editItemCallback(item.id)}
      >
        Edit
      </button>
    </div>
  );
};
