import React from "react";

export const Cyber = () => {
  return (
    <div>
      <h1>
        <center>Here is thee Intresting topics of Cyber Security</center>
      </h1>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          gap: "10px",
          margin: "10px",
          marginLeft: "50px",
        }}
      >
        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*_zpxxrf_wTfZQ52KxRuxEQ.jpeg"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Cyber Security Introduction</h5>
            <p className="card-text">
              Cyber Security is the study of data and how to analyze it to gain
              insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://www.javatpoint.com/what-is-cyber-security"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://www.infosectrain.com/wp-content/uploads/2022/11/Cybersecurity-Jobs-161.jpg"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Jobs in Cyber Security</h5>
            <p className="card-text">
              There are many jobs available in Cyber Security field. It is a
              growing field and many companies are hiring.It is an Non-coding
              Jobs..
            </p>
            <a
              href="https://in.indeed.com/q-cyber-security-l-chennai,-tamil-nadu-jobs.html?vjk=8accd38b60c77a75"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://images.shiksha.com/mediadata/images/articles/1699507224phpYmh3uc.jpeg"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Books for Cyber Security</h5>
            <p className="card-text">
              Books for Cyber Security is the study of data and how to analyze
              it to gain insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://www.reddit.com/r/cybersecurity/comments/yj4sdq/whats_a_must_read_book_for_cyber_security/"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210408115316/Top-6-Cybersecurity-Projects-Ideas-for-Beginners-Updated.png"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Projects Ideas of Cyber Security</h5>
            <p className="card-text">
              Project Ideas is the study of data and how to analyze it to gain
              insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://www.knowledgehut.com/blog/security/top-cyber-security-projects"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cyber;
