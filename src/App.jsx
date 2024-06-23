import { useState } from "react"; // Importing the useState hook from the React library

function App() {
  // useState is a React hook that allows us to add state to a functional component.
  // const [score, setScore] = useState(0);
  // The line above is commented out. It initializes a state variable 'score' with an initial value of 0.
  // setScore is the function used to update the state of 'score'.

  // const [banned, setBanned] = useState(false);
  // This line is also commented out. It initializes a state variable 'banned' with an initial value of false.

  // const [val, setVal] = useState(0);
  // This initializes a state variable 'val' with an initial value of 0.

  const [data, setData] = useState({ name: "lucky", isBanned: false });
  // This line initializes a state variable 'data' as an object with properties 'name' and 'isBanned'.
  // Initially, 'name' is "lucky" and 'isBanned' is false.

  // const handleScore = () => {
  //   setScore(score + 1);
  // };
  // The above function, when called, would increment the 'score' state by 1.

  // const handleBanned = () => {
  //   setBanned(!banned);
  // };
  // The above function, when called, would toggle the 'banned' state between true and false.

  // setVal(argument) explanation:
  // setVal is the state updating function returned by useState for the 'val' state variable.
  // setVal(argument) updates the state variable 'val' to the new value provided by 'argument'.
  // Example: 
  // const [val, setVal] = useState(0);
  // setVal(5); // Now, 'val' is 5
  // You can also use a function as the argument to setVal to get the previous state value and compute the new state based on it.
  // setVal(prevVal => prevVal + 1); // Increment 'val' by 1

  // Why we can't directly change the values of reference types in React state:
  // In React, state should be treated as immutable. This means you should not directly modify state objects or arrays.
  // Directly modifying the state can lead to unpredictable behavior because React may not detect the changes and re-render the component as expected.
  // Instead, you should create a new object or array and then use the state update function to replace the old state with the new one.
  // The spread operator ('...') is commonly used to create a copy of an object or array with some modifications.

  // Example of using the spread operator to update state:
  // Suppose you have a state variable 'data' that is an object.
  // const [data, setData] = useState({ name: "lucky", isBanned: false });
  // If you want to update the 'isBanned' property, you should create a new object that copies the existing properties and updates 'isBanned'.
  // onClick={() => setData({ ...data, isBanned: !data.isBanned })}
  // The spread operator '...data' copies all properties from the 'data' object.
  // { ...data, isBanned: !data.isBanned } creates a new object with all the existing properties of 'data', but with 'isBanned' toggled.

  // Why immutability matters:
  // Immutability makes it easier to track changes and debug your application.
  // It ensures that you are not accidentally changing the previous state, which can help avoid bugs.
  // React relies on state immutability to detect changes and optimize rendering. When a new state object is created, React can efficiently determine which parts of the component tree need to be re-rendered.

  // Example with arrays:
  // Similar principles apply to arrays. If you want to update an array in state, you should create a new array rather than modifying the existing one.
  // const [items, setItems] = useState([1, 2, 3]);
  // Adding a new item to the array:
  // setItems([...items, 4]); // Now, 'items' is [1, 2, 3, 4]
  // Updating an item in the array:
  // const newItems = items.map(item => item === 2 ? 20 : item);
  // setItems(newItems); // Now, 'items' is [1, 20, 3, 4]

  return (
    <div className="px-10"> {/* A div with padding applied from the CSS class "px-10" */}
      {/* <h3>{banned.toString()}</h3> */}
      {/* The above line, if uncommented, would display the current value of 'banned' state. */}

      {/* <h3>{val}</h3> */}
      {/* The above line, if uncommented, would display the current value of 'val' state. */}

      <h3>Name : {data.name}</h3> {/* Displays the 'name' property of the 'data' state */}
      <h4>Is Banned : {data.isBanned.toString()}</h4> {/* Displays the 'isBanned' property of the 'data' state */}
      
      {/* <button
        className="px-2 py-2 text-xs mt-4 bg-blue-500 rounded-md text-white"
        onClick={handleBanned}
      >
        Change Banned
      </button> */}
      {/* The above button, if uncommented, would toggle the 'banned' state when clicked. */}

      {/* <button
        className="px-2 py-2 text-xs mt-4 bg-blue-500 rounded-md text-white"
        onClick={() => setVal((prev) => prev + 1)}
      >
        Change Value
      </button> */}
      {/* The above button, if uncommented, would increment the 'val' state by 1 when clicked. */}

      <button
        className="px-2 py-2 text-xs mt-4 bg-blue-500 rounded-md text-white"
        // onClick={() => setData({ name: "Divyanshu", isBanned: true })}
        onClick={() => setData({ ...data, isBanned: !data.isBanned })}
        // The above line will toggle the 'isBanned' property of 'data' state when clicked.
        // The spread operator '...' ensures that the other properties of the 'data' object remain unchanged.
      >
        Change Value
      </button>
    </div>
  );
}

export default App; // Exporting the App component as the default export
