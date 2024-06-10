import React from "react";

function Search() {
  return (
    <div class="  searchBox" style={{ height: "60px" }}>
      <form class="d-flex col-12 justify-content-center">
        <input
          class="form-control searchBoxInput"
          type="search"
          placeholder="Where Search Destination"
          aria-label="Search"
        />
        <input
          class="form-control searchBoxInput "
          type="search"
          placeholder="Check in Add Dates"
          aria-label="Search"
        />
        <input
          class="form-control searchBoxInput"
          type="search"
          placeholder="Check out Add Dates"
          aria-label="Search"
        />
        <input
          class="form-control searchBoxInput"
          type="search"
          placeholder="Who Add guests"
          aria-label="Search"
        />
        <button class="btn iconSearch " type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Search;
