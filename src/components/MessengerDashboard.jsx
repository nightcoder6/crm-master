import React, { useState } from "react";

const MessengerDashboard = () => {
  // Sample data for jobs
  const [jobs, setJobs] = useState([
    { id: 1, title: "Deliver Package A", status: "Assigned", completionLink: "", netPayable: 50 },
    { id: 2, title: "Deliver Package B", status: "Assigned", completionLink: "", netPayable: 30 },
    { id: 3, title: "Deliver Package B", status: "Assigned", completionLink: "", netPayable: 30 },
    { id: 4, title: "Deliver Package B", status: "Assigned", completionLink: "", netPayable: 30 },
    { id: 5, title: "Deliver Package B", status: "Assigned", completionLink: "", netPayable: 30 },
  ]);

  const [withdrawnAmount, setWithdrawnAmount] = useState(0);

  // Handle job acceptance
  const handleAccept = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: "Accepted" } : job
      )
    );
  };

  // Handle job rejection
  const handleReject = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.filter((job) => job.id !== jobId) // Remove the rejected job
    );
    alert("Job rejected successfully!");
  };

  // Handle completion link submission
  const handleCompletion = (jobId, link) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId
          ? { ...job, status: "Completed", completionLink: link }
          : job
      )
    );
  };

  // Handle money withdrawal
  const handleWithdraw = () => {
    const totalPayable = jobs.reduce((acc, job) => acc + job.netPayable, 0);
    setWithdrawnAmount((prev) => prev + totalPayable);
    setJobs((prevJobs) =>
      prevJobs.map((job) => ({ ...job, netPayable: 0 }))
    );
    alert("Withdrawal successful!");
  };

  return (
    <div className="dashboard-container">
      <h2>Messenger Dashboard</h2>

      <div className="jobs-list">
        <h3>Jobs Assigned</h3>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="job-item">
              <p>
                <strong>Job:</strong> {job.title}
              </p>
              <p>
                <strong>Status:</strong> {job.status}
              </p>
              {job.status === "Assigned" && (
                <div>
                  <button
                    onClick={() => handleAccept(job.id)}
                    className="dashboard-btn"
                  >
                    Accept Job
                  </button>
                  <button
                    onClick={() => handleReject(job.id)}
                    className="dashboard-btn reject-btn"
                  >
                    Reject Job
                  </button>
                </div>
              )}
              {job.status === "Accepted" && (
                <div>
                  <input
                    type="text"
                    placeholder="Paste completion link"
                    onBlur={(e) => handleCompletion(job.id, e.target.value)}
                    className="completion-input"
                  />
                  <p>
                    <strong>Net Payable:</strong> ${job.netPayable}
                  </p>
                </div>
              )}
              {job.status === "Completed" && (
                <div>
                  <p>
                    <strong>Completion Link:</strong> {job.completionLink}
                  </p>
                  <p>
                    <strong>Net Payable:</strong> ${job.netPayable}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No jobs available.</p>
        )}
      </div>

      <div className="withdraw-section">
        <h3>Net Payable: ${jobs.reduce((acc, job) => acc + job.netPayable, 0)}</h3>
        <button onClick={handleWithdraw} className="dashboard-btn">
          Withdraw Money
        </button>
        <p>Total Withdrawn: ${withdrawnAmount}</p>
      </div>
    </div>
  );
};

export default MessengerDashboard;
