import React, { useState } from "react";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import Block from "./components/Block";
import { Oval } from "react-loader-spinner";

function App() {
  const [count, setCount] = useState(1);
  const [itemList, setItemList] = useState([
    <Block text="1" />,
    <Block text="2" />,
    <Block text="3" />,
    <Block text="4" />,
    <Block text="5" />,
  ]);

  const addItemList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCount((current) => current + 1);
    setItemList((itemList) => [
      ...itemList,
      <Block text={count * 5 + 1} />,
      <Block text={count * 5 + 2} />,
      <Block text={count * 5 + 3} />,
      <Block text={count * 5 + 4} />,
      <Block text={count * 5 + 5} />,
    ]);
  };

  return (
    <div className="App">
      <InfiniteScroll
        itemList={itemList}
        addItemList={addItemList}
        spinner={<Oval width="100%" height="80px" />}
      />
    </div>
  );
}

export default App;
