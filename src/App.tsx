import React, { useState } from "react";
import "./App.css";

function App() {
  const [accountData, setAccountData] = useState([
    {
      date: "2022-12-13T130000Z",
      description: "Adana Kebap",
      input: 0,
      output: 50,
    },
  ]);

  const [net, setNet] = useState(0);

  const now = new Date();

  const [newDate, setNewDate] = useState(now);
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [description, setDescription] = useState("");

  const addNewRow = () => {
    const now = new Date();
    setNewDate(now);

    setAccountData([
      ...accountData,
      {
        date: now.toISOString(),
        description: description,
        input: input,
        output: output,
      },
    ]);

    setInput(0);
    setOutput(0);
    setDescription("");

    console.log(accountData);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>
              <b>Date</b>
            </td>
            <td>
              <b>Description</b>
            </td>
            <td>
              <b>Input</b>
            </td>
            <td>
              <b>Output</b>
            </td>
            <td>
              <b>Net</b>
            </td>
          </tr>
        </thead>

        <tbody>
          {accountData.map((e) => {
            return (
              <tr key={e.date}>
                <td>{e.date}</td>
                <td>{e.description}</td>
                <td>{e.input}</td>
                <td>{e.output}</td>
                <td>{net}</td>
              </tr>
            );
          })}

          <tr>
            <td>
              <input
                placeholder="2022-12-13 23:59:59"
                value={newDate.toISOString()}
              />
            </td>

            <td>
              <input placeholder="Description" value={description} />
            </td>

            <td>
              <input placeholder="Input" value={input} />
            </td>

            <td>
              <input placeholder="Output" value={output} />
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={addNewRow}>Add new</button>
    </>
  );
}

export default App;
