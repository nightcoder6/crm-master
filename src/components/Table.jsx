import React from "react";

const Table = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      "job-id": "J123",
      "messenger-id": "M456",
      "fb-link": "https://facebook.com/john",
      "fb-impression": 100,
      "fb-like": 25,
      "fb-share": 10,
      "fb-comment": 5,
      "tw-link": "https://twitter.com/john",
      "tw-impression": 120,
      "tw-like": 30,
      "tw-share": 12,
      "tw-comment": 8,
      "in-link": "https://linkedin.com/john",
      "in-impression": 90,
      "in-like": 20,
      "in-share": 8,
      "in-comment": 4,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      "job-id": "J789",
      "messenger-id": "M321",
      "fb-link": "https://facebook.com/jane",
      "fb-impression": 150,
      "fb-like": 40,
      "fb-share": 20,
      "fb-comment": 15,
      "tw-link": "https://twitter.com/jane",
      "tw-impression": 180,
      "tw-like": 50,
      "tw-share": 25,
      "tw-comment": 10,
      "in-link": "https://linkedin.com/jane",
      "in-impression": 110,
      "in-like": 35,
      "in-share": 15,
      "in-comment": 7,
    },
    {
      id: 3,
      name: "Sam Johnson",
      email: "sam@example.com",
      "job-id": "J456",
      "messenger-id": "M789",
      "fb-link": "https://facebook.com/sam",
      "fb-impression": 130,
      "fb-like": 35,
      "fb-share": 15,
      "fb-comment": 10,
      "tw-link": "https://twitter.com/sam",
      "tw-impression": 140,
      "tw-like": 45,
      "tw-share": 18,
      "tw-comment": 9,
      "in-link": "https://linkedin.com/sam",
      "in-impression": 100,
      "in-like": 28,
      "in-share": 12,
      "in-comment": 6,
    },
    {
        id: 4,
        name: "John Doe",
        email: "john@example.com",
        "job-id": "J123",
        "messenger-id": "M456",
        "fb-link": "https://facebook.com/john",
        "fb-impression": 100,
        "fb-like": 25,
        "fb-share": 10,
        "fb-comment": 5,
        "tw-link": "https://twitter.com/john",
        "tw-impression": 120,
        "tw-like": 30,
        "tw-share": 12,
        "tw-comment": 8,
        "in-link": "https://linkedin.com/john",
        "in-impression": 90,
        "in-like": 20,
        "in-share": 8,
        "in-comment": 4,
      },
      {
        id: 5,
        name: "Jane Smith",
        email: "jane@example.com",
        "job-id": "J789",
        "messenger-id": "M321",
        "fb-link": "https://facebook.com/jane",
        "fb-impression": 150,
        "fb-like": 40,
        "fb-share": 20,
        "fb-comment": 15,
        "tw-link": "https://twitter.com/jane",
        "tw-impression": 180,
        "tw-like": 50,
        "tw-share": 25,
        "tw-comment": 10,
        "in-link": "https://linkedin.com/jane",
        "in-impression": 110,
        "in-like": 35,
        "in-share": 15,
        "in-comment": 7,
      },
      {
        id: 6,
        name: "Sam Johnson",
        email: "sam@example.com",
        "job-id": "J456",
        "messenger-id": "M789",
        "fb-link": "https://facebook.com/sam",
        "fb-impression": 130,
        "fb-like": 35,
        "fb-share": 15,
        "fb-comment": 10,
        "tw-link": "https://twitter.com/sam",
        "tw-impression": 140,
        "tw-like": 45,
        "tw-share": 18,
        "tw-comment": 9,
        "in-link": "https://linkedin.com/sam",
        "in-impression": 100,
        "in-like": 28,
        "in-share": 12,
        "in-comment": 6,
      },
      {
        id: 7,
        name: "John Doe",
        email: "john@example.com",
        "job-id": "J123",
        "messenger-id": "M456",
        "fb-link": "https://facebook.com/john",
        "fb-impression": 100,
        "fb-like": 25,
        "fb-share": 10,
        "fb-comment": 5,
        "tw-link": "https://twitter.com/john",
        "tw-impression": 120,
        "tw-like": 30,
        "tw-share": 12,
        "tw-comment": 8,
        "in-link": "https://linkedin.com/john",
        "in-impression": 90,
        "in-like": 20,
        "in-share": 8,
        "in-comment": 4,
      },
      {
        id: 8,
        name: "Jane Smith",
        email: "jane@example.com",
        "job-id": "J789",
        "messenger-id": "M321",
        "fb-link": "https://facebook.com/jane",
        "fb-impression": 150,
        "fb-like": 40,
        "fb-share": 20,
        "fb-comment": 15,
        "tw-link": "https://twitter.com/jane",
        "tw-impression": 180,
        "tw-like": 50,
        "tw-share": 25,
        "tw-comment": 10,
        "in-link": "https://linkedin.com/jane",
        "in-impression": 110,
        "in-like": 35,
        "in-share": 15,
        "in-comment": 7,
      },
      {
        id: 9,
        name: "Sam Johnson",
        email: "sam@example.com",
        "job-id": "J456",
        "messenger-id": "M789",
        "fb-link": "https://facebook.com/sam",
        "fb-impression": 130,
        "fb-like": 35,
        "fb-share": 15,
        "fb-comment": 10,
        "tw-link": "https://twitter.com/sam",
        "tw-impression": 140,
        "tw-like": 45,
        "tw-share": 18,
        "tw-comment": 9,
        "in-link": "https://linkedin.com/sam",
        "in-impression": 100,
        "in-like": 28,
        "in-share": 12,
        "in-comment": 6,
      },
  ];

  return (
    <div className="table-container">
      <h2>Users Table</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Job ID</th>
            <th>Messenger ID</th>
            <th>FB Link</th>
            <th>FB Impression</th>
            <th>FB Like</th>
            <th>FB Share</th>
            <th>FB Comment</th>
            <th>TW Link</th>
            <th>TW Impression</th>
            <th>TW Like</th>
            <th>TW Share</th>
            <th>TW Comment</th>
            <th>IN Link</th>
            <th>IN Impression</th>
            <th>IN Like</th>
            <th>IN Share</th>
            <th>IN Comment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row["job-id"]}</td>
              <td>{row["messenger-id"]}</td>
              <td><a href={row["fb-link"]} target="_blank" rel="noopener noreferrer">FB</a></td>
              <td>{row["fb-impression"]}</td>
              <td>{row["fb-like"]}</td>
              <td>{row["fb-share"]}</td>
              <td>{row["fb-comment"]}</td>
              <td><a href={row["tw-link"]} target="_blank" rel="noopener noreferrer">TW</a></td>
              <td>{row["tw-impression"]}</td>
              <td>{row["tw-like"]}</td>
              <td>{row["tw-share"]}</td>
              <td>{row["tw-comment"]}</td>
              <td><a href={row["in-link"]} target="_blank" rel="noopener noreferrer">IN</a></td>
              <td>{row["in-impression"]}</td>
              <td>{row["in-like"]}</td>
              <td>{row["in-share"]}</td>
              <td>{row["in-comment"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
