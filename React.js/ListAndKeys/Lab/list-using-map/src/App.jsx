import React from 'react'

const App = () => {
  const fruits = [
    { id: 1, name: 'Apple', calories: 52 },
    { id: 2, name: 'Banana', calories: 89 },
    { id: 3, name: 'Cherry', calories: 50 },
    { id: 4, name: 'Date', calories: 277 },
    { id: 5, name: 'Elderberry', calories: 73 },
  ];
  fruits.sort((a, b) => a.calories - b.calories);
  const fruitList = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; {fruit.calories} calories
    </li>
  ));
  return (
    <>
    <h1>Fruit List</h1>
      <ol>
        {fruitList}
      </ol>
    </>
  );
}

export default App
