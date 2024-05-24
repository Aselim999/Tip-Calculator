import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = Math.round(bill * (percentage1 + percentage2 / 2 / 100));

  function rsetHandler() {
    setBill([]);
    setPercentage1([]);
    setPercentage2([]);
  }

  return (
    <div className="App">
      <Input bill={bill} setBill={setBill} />
      <ServiceRate percentage1={percentage1} setPercentage1={setPercentage1} />
      <FriendRate percentage2={percentage2} setPercentage2={setPercentage2} />
      {bill > 0 && (
        <>
          {" "}
          <TipCalc bill={bill} tip={tip} />
          <Reset rsetHandler={rsetHandler} />{" "}
        </>
      )}
    </div>
  );
}

function Input({ bill, setBill }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p>How Much Was The Bill?</p>
        <input
          type="text"
          placeholder="how much you paid? $"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        ></input>
      </div>
    </div>
  );
}

function ServiceRate({ percentage1, setPercentage1 }) {
  const options = [
    { text: "it was not good", rate: 0 },
    { text: "a little bit good", rate: 5 },
    { text: "it's good somehow", rate: 10 },
    { text: "it's very good", rate: 15 },
    { text: "it's absolutely amazing", rate: 20 },
  ];
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p>How Did You Like The Service?</p>
        <select
          value={percentage1}
          onChange={(e) => setPercentage1(Number(e.target.value))}
        >
          {options.map((opt) => (
            <option value={opt.rate} key={opt}>
              {opt.text}, {opt.rate}%
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function FriendRate({ percentage2, setPercentage2 }) {
  const options = [
    { text: "it was not good", rate: 0 },
    { text: "a little bit good", rate: 5 },
    { text: "it's good somehow", rate: 10 },
    { text: "it's very good", rate: 15 },
    { text: "it's absolutely amazing", rate: 20 },
  ];

  return (
    <div>
      <div style={{ display: "flex" }}>
        <p>How Did Your friend Like The Service?</p>
        <select
          value={percentage2}
          onChange={(e) => setPercentage2(Number(e.target.value))}
        >
          {options.map((opt) => (
            <option value={opt.rate} key={opt}>
              {opt.text}, {opt.rate}%
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function TipCalc({ bill, tip }) {
  return (
    <div style={{ display: "flex" }}>
      <p>
        You Pay {bill + tip} (${bill} + ${tip} tip)
      </p>
    </div>
  );
}

function Reset({ rsetHandler }) {
  return (
    <div>
      <button onClick={rsetHandler}>Reset</button>
    </div>
  );
}
