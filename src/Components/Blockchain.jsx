import React from "react";

export const Blockchain = () => {
  return (
    <div>
      <h1>
        <center>Here is thee Intresting topics of Blockchain</center>
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
            src="https://www.digitalvidya.com/blog/wp-content/uploads/2018/03/Introduction-to-Blockchain.jpg"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">BlockChain Introduction</h5>
            <p className="card-text">
              BlockChain is the study of data and how to analyze it to gain
              insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://ntiprit.gov.in/pdf/blockchainanddistributed/Blockchain_Introduction_KR.pdf"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Jobs in Blockchain</h5>
            <p className="card-text">
              There are many jobs available in Blockchain field. It is a growing
              field and many companies are hiring.It is an Non-coding Jobs..
            </p>
            <a
              href="https://cryptocurrencyjobs.co/non-tech/"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://www.firmofthefuture.com/oidam/intuit/sbseg/en_us/Blog/Photography/Stock/blockchain-payments-faster-secure-us-en.png"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Books for Blockchain</h5>
            <p className="card-text">
              Books for Blockchain is the study of data and how to analyze it to
              gain insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://www.techtarget.com/whatis/feature/5-must-read-blockchain-books-for-2021"
              className="btn btn-primary"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210206185509/Top-7-Interesting-Blockchain-Project-Ideas-for-Beginners.png"
            className="card-img-top"
            alt="image not found"
          />
          <div className="card-body">
            <h5 className="card-title">Projects Ideas of Blockchain</h5>
            <p className="card-text">
              Project Ideas is the study of data and how to analyze it to gain
              insights. This field is growing rapidly in terms of job
              opportunities and research.
            </p>
            <a
              href="https://nevonprojects.com/blockchain-projects-development/"
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

export default Blockchain;
