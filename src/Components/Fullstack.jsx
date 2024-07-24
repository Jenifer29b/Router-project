import React from "react";

export const Fullstack = () => {
  return (
    <div>
      <h1>
        <center>Here is thee Intresting topics of FullStack Development</center>
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
            src="https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">FullStack Introduction</h5>
            <p className="card-text">
              FullStack is the study of data and how to analyze it to gain
              insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://www.mongodb.com/resources/basics/full-stack-development"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://crampete-staticfiles.s3.ap-south-1.amazonaws.com/images/blog/full-stack-developer-jobs-in-chennai.jpg"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Jobs in FullStack</h5>
            <p className="card-text">
              There are many jobs available in Fullstack field. It is a growing
              field and many companies are hiring.It is an Non-coding Jobs..
            </p>
            <a
              href="https://www.naukri.com/full-stack-developer-jobs-in-india"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development-300x188.webp"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Books for FullStack</h5>
            <p className="card-text">
              Books for FullStack is the study of data and how to analyze it to
              gain insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://www.quora.com/I-need-a-full-stack-web-developer-book-Which-is-the-best-book-for-a-full-stack-web-developer"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://www.spaceo.ca/wp-content/uploads/2021/08/Full-Stack-Project-Ideas.jpg"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">
              Projects Ideas of FullStack Development
            </h5>
            <p className="card-text">
              Project Ideas is the study of data and how to analyze it to gain
              insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://www.turing.com/blog/full-stack-project-ideas-for-software-developers"
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

export default Fullstack;
