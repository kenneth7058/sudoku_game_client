import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.Name}</td>
    <td>{props.record.Time}</td>
    <td>
      <Link className="btn btn-link" to={`/sudoku/${props.record.Suduku}`}>Sudoku</Link>
    </td>
  </tr>
);

export default function HighScore() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/highscore/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will map out the records on the table
  function highScore() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Sudoku</th>
          </tr>
        </thead>
        <tbody>{highScore()}</tbody>
      </table>
    </div>
  );
}