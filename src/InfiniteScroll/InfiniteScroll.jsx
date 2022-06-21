import React, { useState, useEffect } from "react";

const InfiniteScroll = ({ itemList, addItemList, spinner }) => {
  const [target, setTarget] = useState(null);
  const [loading, setLoading] = useState(false);

  const Spinner = () => {
    return spinner;
  };

  const targetStyle = {
    width: "100%",
    height: "1px",
  };

  const callback = async ([entry], observer) => {
    if (entry.isIntersecting) {
      setLoading(true);
      await addItemList();
      setLoading(false);
    }
  };

  const observer = new IntersectionObserver(callback, { threshold: 0.4 });

  useEffect(() => {
    if (!target) return;

    observer.observe(target);
  }, [target]);

  return (
    <>
      {itemList.map((item, index) => {
        const Item = () => {
          return item;
        };
        return <Item key={index} />;
      })}
      {loading && <Spinner />}
      {!loading && <div style={targetStyle} ref={setTarget}></div>}
    </>
  );
};

const DefaultSpinner = () => {
  const spinnerStyle = {
    width: "100%",
    height: "50px",
    textAlign: "center",
  };

  return <div style={spinnerStyle}>Loading...</div>;
};

InfiniteScroll.defaultProps = {
  spinner: <DefaultSpinner />,
};

export default InfiniteScroll;
