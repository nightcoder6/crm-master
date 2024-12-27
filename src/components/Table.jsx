const Table = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe123",
      jobsAssigned: 5,
      payoutReceived: "$500",
      jobsCompleted: 4,
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith456",
      jobsAssigned: 7,
      payoutReceived: "$700",
      jobsCompleted: 6,
    },
    {
      id: 3,
      name: "Sam Johnson",
      username: "samjohnson789",
      jobsAssigned: 6,
      payoutReceived: "$600",
      jobsCompleted: 5,
    },
  ];

  return (
    <div className="table-container">
      <h2>Users Table</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>User Name</th>
            <th>No. of Jobs Assigned</th>
            <th>Total Payout Received</th>
            <th>No. of Jobs Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.username}</td>
              <td>{row.jobsAssigned}</td>
              <td>{row.payoutReceived}</td>
              <td>{row.jobsCompleted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
