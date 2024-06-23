import { useState } from "react"; // Importing the useState hook from the React library

function App() {
  // useState is a React hook that allows us to add state to a functional component.
  // const [val, setVal] = useState({ name: "lucky", isBanned: false });
  // The line above is commented out. It initializes a state variable 'val' as an object with properties 'name' and 'isBanned'.
  // Initially, 'name' is "lucky" and 'isBanned' is false.

  // const [val, setVal] = useState({ name: "lucky", age: 23 });
  // This line, if uncommented, initializes 'val' as an object with properties 'name' and 'age'.
  // Initially, 'name' is "lucky" and 'age' is 23.

  // const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  // This line, if uncommented, initializes 'val' as an array with the values [1, 2, 3, 4, 5, 6].

  const [val, setVal] = useState([
    { name: "lucky", age: 23 },
    { name: "Shivam", age: 34 },
    { name: "golu", age: 25 },
  ]);
  // This line initializes 'val' as an array of objects, each with 'name' and 'age' properties.

  return (
    <div className="p-4"> {/* A div with padding applied from the CSS class "p-4" */}
      {/* 
      <h1>Name : {val.name}</h1>
      <h2>Banned : {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 ${
          val.isBanned ? "bg-blue-600" : "bg-red-700"
        } text-white text-md rounded-full`}
      >
        Change Button
      </button> 
      */}
      {/* The above block, if uncommented, would display 'name' and 'isBanned' properties of 'val' and a button to toggle 'isBanned'. */}

      {/* 
      <h1>Name : {val.name}</h1>
      <h2>Age : {val.age}</h2>
      <h3>Role : {val.gender}</h3>

      <button
        className="px-3 py-1 mt-3 bg-red-500 text-md rounded-full"
        onClick={() => setVal({ ...val, gender: "Male" })}
      >
        Click
      </button> 
      */}
      {/* The above block, if uncommented, would display 'name' and 'age' properties of 'val' and a button to set the 'gender' property. */}

      {val.map((item, index) => (
        <>
          <h1 key={index}>Name : {item.name}</h1>
          <p>Age : {item.age}</p>
        </>
      ))}
      {/* The above code maps over the 'val' array and displays the 'name' and 'age' properties of each object in the array. */}

      <button
        onClick={() =>
          setVal(() =>
            val.map((item, index) =>
              item.name === "Shivam" ? { name: "Shivam", age: 55 } : item
            )
          )
        }
        // The above line will update the 'age' property of the object with 'name' "Shivam" to 55.
        // The map function creates a new array with the updated 'age' for "Shivam".

        // onClick={() => setVal([...val, 10])}
        // The above line, if uncommented, would add the value 10 to the end of the 'val' array.

        // onClick={() =>
        //   setVal(() => val.filter((item, index) => item % 2 !== 0))
        // }
        // The above line, if uncommented, would filter out even numbers from the 'val' array.

        // onClick={() => setVal(() => val.filter((item, index) => index != 2))}
        // The above line, if uncommented, would remove the item at index 2 from the 'val' array.

        // onClick={() =>
        //   setVal(() => {
        //     return val.filter((item, index) => index != val.length - 1);
        //   })
        // }
        // The above line, if uncommented, would remove the last item from the 'val' array.

        className="px-3 py-1 text-md bg-blue-500 rounded-full text-white"
      >
        Change
      </button>
    </div>
  );
}

export default App; // Exporting the App component as the default export

/*
setVal(argument) explanation:
- setVal is the state updating function returned by useState for the 'val' state variable.
- setVal(argument) updates the state variable 'val' to the new value provided by 'argument'.
- Example: 
  const [val, setVal] = useState(0);
  setVal(5); // Now, 'val' is 5
- You can also use a function as the argument to setVal to get the previous state value and compute the new state based on it.
  setVal(prevVal => prevVal + 1); // Increment 'val' by 1

Why we can't directly change the values of reference types in React state:
- In React, state should be treated as immutable. This means you should not directly modify state objects or arrays.
- Directly modifying the state can lead to unpredictable behavior because React may not detect the changes and re-render the component as expected.
- Instead, you should create a new object or array and then use the state update function to replace the old state with the new one.
- The spread operator ('...') is commonly used to create a copy of an object or array with some modifications.

Example of using the spread operator to update state:
- Suppose you have a state variable 'data' that is an object.
  const [data, setData] = useState({ name: "lucky", isBanned: false });
- If you want to update the 'isBanned' property, you should create a new object that copies the existing properties and updates 'isBanned'.
  onClick={() => setData({ ...data, isBanned: !data.isBanned })}
- The spread operator '...data' copies all properties from the 'data' object.
- { ...data, isBanned: !data.isBanned } creates a new object with all the existing properties of 'data', but with 'isBanned' toggled.

Why immutability matters:
- Immutability makes it easier to track changes and debug your application.
- It ensures that you are not accidentally changing the previous state, which can help avoid bugs.
- React relies on state immutability to detect changes and optimize rendering. When a new state object is created, React can efficiently determine which parts of the component tree need to be re-rendered.

Example with arrays:
- Similar principles apply to arrays. If you want to update an array in state, you should create a new array rather than modifying the existing one.
  const [items, setItems] = useState([1, 2, 3]);
- Adding a new item to the array:
  setItems([...items, 4]); // Now, 'items' is [1, 2, 3, 4]
- Updating an item in the array:
  const newItems = items.map(item => item === 2 ? 20 : item);
  setItems(newItems); // Now, 'items' is [1, 20, 3, 4]
*/
