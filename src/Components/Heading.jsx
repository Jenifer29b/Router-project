import React from "react";
const Heading = () => {
  return (
    <>
      <div className="d-inline-block align-text-top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tHOnXDUptL9OhwTjuPWgG6LKWXAxilHcbg&s"
          alt="Logo"
          style={{
            width: "100px",
            height: "100px",
            className: "d-inline-block align-text-top",
            marginLeft: "20px",
          }}
        />
        <b>GUVI</b>
        <form
          className="d-inline-flex"
          style={{ marginLeft: "40px", width: "350px" }}
          role="search"
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="What You Want to Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <button
          type="button"
          class="btn btn-success"
          style={{ marginLeft: "700px", width: "100px" }}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Heading;
