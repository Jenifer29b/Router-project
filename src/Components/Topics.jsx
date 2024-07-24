import React from "react";

const Topics = () => {
  return (
    <div>
      <h1>
        <center>Here is thee Topics of Trending Articles</center>
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
            src="https://onlinegurukul.org/storage/uploads/1658492516-dm.jpeg"
            className="card-img-top"
            alt="Image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Digital Marketing </h5>
            <p className="card-text">
              Digital marketing is the promotion of brands and products on the
              internet. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://business.adobe.com/blog/basics/digital-marketing"
              className="btn btn-primary"
            >
              Click here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Data Science</h5>
            <p className="card-text">
              Data Science is the study of data and how to analyze it to gain
              insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://www.ibm.com/topics/data-science"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-2048x1001.png"
            className="card-img-top"
            alt="Image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Project Ideas for Web Development </h5>
            <p className="card-text">
              Project Ideas is the study of data and how to analyze it to gain
              insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://www.knowledgehut.com/blog/web-development/web-development-projects"
              className="btn btn-primary"
            >
              Click here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://i.ytimg.com/vi/GA1OMq_L4ok/maxresdefault.jpg"
            className="card-img-top"
            alt="Image not found"
          />
          <div className="card-body">
            <h5 className="card-title">
              Project Ideas For Mechanical Engineering{" "}
            </h5>
            <p className="card-text">
              Mechanical Engineering is the study of data and how to analyze it
              to gain insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://nevonprojects.com/mechanical-engineering-projects/"
              className="btn btn-primary"
            >
              Click here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
