import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackageList";
import Footer from "./Stats";
import { useState } from "react";

export default function FarAway() {
  const [liftItem, setLiftItem] = useState([]);

  function handleAddItems(item) {
    setLiftItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setLiftItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setLiftItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("are you sure you want to clear list");
    if (confirmed) {
      setLiftItem([]);
    }
  }

  return (
    <div>
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackageList
        liftItem={liftItem}
        handleDeleteItem={handleDeleteItem}
        handleToggle={handleToggle}
        handleClearList={handleClearList}
      />
      <Footer liftItem={liftItem} />
    </div>
  );
}
