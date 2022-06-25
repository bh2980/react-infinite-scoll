# React Infinite Scroll  <img src="https://img.shields.io/badge/React-61DAFB?style=round&logo=React&logoColor=white">

![img](https://user-images.githubusercontent.com/74360958/174838337-7ac050f5-836e-4672-b27e-ac2092699a81.gif)

## Description
* 아이템 리스트를 받아 렌더링하는 무한스크롤 컴포넌트
* 개발인원 : 1명
* 프로젝트 기간 : 2022.06.22
* 아이템 목록과 독립적으로 동작하는 무한스크롤 컴포넌트를 만들고자 시도하여 개발

## How to Use

InfiniteScroll.jsx 파일을 프로젝트에 포함.

```javascript
import InfiniteScroll from './InfiniteScroll';

<InfiniteScroll itemList={itemList} addItemList={addItemList} end={end} spinner={spinner} />
```

|Parameter|Type|Required|
|---|---|-|
|itemList|ReactElement[]|O|
|addItemList|() => Promise<void>|O|
|end|boolean|O|
|spinner|ReactElement|X|
  
* Example of addItemList function
  
  ```javascript
  const addItemList = async () => {
    const newItem = await getItem();
  
    if(!newItem) return;
  
    setItemList((itemList) => [
      ...itemList,
      ...newItem
    ]);
  };
  ```
  
## Post
https://bh2980.tistory.com/157

