import "./App.css";
import { Counter } from "./Counter";
// import TextField from "./TextField";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Yo</h1>
      {/* <TextField text='Hello' fn={(name) => name} handleChange={(event) => console.log({event})} /> */}
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            {/* <button onClick={() => setCount("1")}>+</button> */}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
