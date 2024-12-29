import React, { useState } from "react";

const MessengerDashboard = () => {
  const [jobs, setJobs] = useState([
    { id: 1, job: "Create a YouTube campaign targeting Congress voters", description: "Develop a video campaign showcasing key achievements and policy promises of the Congress party. Target audience: young professionals.", status: "Assigned", amount: 500, completionLink: "" },
    { id: 2, job: "Manage Twitter engagement for regional elections", description: "Coordinate tweet schedules and engagement strategies for the upcoming regional elections. Focus on hashtags and trending topics.", status: "Assigned", amount: 300, completionLink: "" },
    { id: 3, job: "Design Instagram posts for candidate promotion", description: "Create visually appealing Instagram posts highlighting the key qualities of the candidate and their manifesto promises.", status: "Assigned", amount: 200, completionLink: "" },
    { id: 4, job: "Analyze opposition party digital campaigns", description: "Review and analyze the social media campaigns of opposition parties and provide insights for counter-strategies.", status: "Assigned", amount: 400, completionLink: "" },
    { id: 5, job: "Draft Facebook posts to boost engagement", description: "Write engaging Facebook posts for public engagement and highlight key campaign promises.", status: "Assigned", amount: 250, completionLink: "" },
    { id: 6, job: "Develop a WhatsApp strategy for voter outreach", description: "Plan and execute a WhatsApp outreach strategy to connect with voters and share personalized messages.", status: "Assigned", amount: 350, completionLink: "" },
  ]);

  const [totalEarnings, setTotalEarnings] = useState(0);
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [acceptedJobs, setAcceptedJobs] = useState([]);
  const [completedJobs, setCompletedJobs] = useState([]);

  const handleAcceptJob = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status: "Accepted" } : job
      )
    );
    const acceptedJob = jobs.find((job) => job.id === id);
    setAcceptedJobs((prev) => [...prev, acceptedJob]);
  };

  const handleCompleteJob = (id) => {
    const updatedJobs = jobs.map((job) => {
      if (job.id === id) {
        return { ...job, status: "Completed" };
      }
      return job;
    });
    setJobs(updatedJobs);

    const completedJob = jobs.find((job) => job.id === id);
    setCompletedJobs((prev) => [...prev, completedJob]);
    setAcceptedJobs((prev) => prev.filter((job) => job.id !== id));
    setTotalEarnings((prevTotal) => prevTotal + completedJob.amount);
  };

  const handleRejectJob = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status: "Rejected" } : job
      )
    );
    setAcceptedJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const handleLinkChange = (id, link) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, completionLink: link } : job
      )
    );
  };

  return (
    <div className="dashboard-container">
      <h2>Messenger Dashboard</h2>
      <p><strong>Total Earnings:</strong> ${totalEarnings}</p>

      {/* Completed Jobs */}
      <h3>Completed Jobs</h3>
      <div className="jobs-grid">
        {completedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <p><strong>Job:</strong> {job.job}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <p><strong>Amount:</strong> ${job.amount}</p>
            <p><strong>Completion Link:</strong> {job.completionLink}</p>
          </div>
        ))}
      </div>

      {/* Accepted Jobs */}
      <h3>Accepted Jobs</h3>
      <div className="jobs-grid">
        {acceptedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <p><strong>Job:</strong> {job.job}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <p><strong>Amount:</strong> ${job.amount}</p>

            <div className="job-details">
              <label>
                <strong>Completion Link:</strong>
                <input
                  type="text"
                  value={job.completionLink}
                  onChange={(e) => handleLinkChange(job.id, e.target.value)}
                  placeholder="Enter link here"
                />
              </label>
              <button
                className="complete-button"
                onClick={() => handleCompleteJob(job.id)}
              >
                Mark as Completed
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Available Jobs */}
      <h3>Available Jobs</h3>
      <div className="jobs-grid">
        {jobs.filter((job) => job.status === "Assigned").map((job) => (
          <div key={job.id} className="job-card">
            <p><strong>Job:</strong> {job.job}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <p><strong>Amount:</strong> ${job.amount}</p>

            {expandedJobId === job.id && (
              <div className="job-details">
                <p><strong>Description:</strong> {job.description}</p>
              </div>
            )}

            <button
              className="toggle-details-button"
              onClick={() =>
                setExpandedJobId(expandedJobId === job.id ? null : job.id)
              }
            >
              {expandedJobId === job.id ? "Hide Details" : "Show Details"}
            </button>

            <div className="button-group">
              <button
                className="accept-button"
                onClick={() => handleAcceptJob(job.id)}
              >
                Accept Job
              </button>
              <button
                className="reject-button"
                onClick={() => handleRejectJob(job.id)}
              >
                Reject Job
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessengerDashboard;
