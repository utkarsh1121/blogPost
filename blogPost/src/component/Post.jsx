import * as React from "react"
import { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"

export default function ActionAreaCard() {
  const [values, setValues] = useState({
    Topic: "",
    Title: "",
    SubTitle: "",
    Description: "",
  });

  const [allValues, setAllValues] = useState([])
  const navigate = useNavigate(); // Initialize useNavigate

  // Retrieve and set values from localStorage when the component mounts
  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("allValues")) || []

    // Set the array of all stored submissions
    setAllValues(storedValues)
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing data from localStorage
    const storedData = JSON.parse(localStorage.getItem("allValues")) || []

    // Add the new data
    const updatedData = [...storedData, values]

    // Store updated data in localStorage
    localStorage.setItem("allValues", JSON.stringify(updatedData))

    // Update state to reflect the new submission
    setAllValues(updatedData)

    // Optionally clear the form after submission
    setValues({ Topic: "", Title: "", SubTitle: "", Description: "" })
    navigate("/")
  };

  const handleReset = () => {
    setValues({ Topic: "", Title: "", SubTitle: "", Description: "" })
    localStorage.removeItem("allValues")
    setAllValues([])
  };

  // const handleClick = () => {
  //   <NavLink
  //   to="home"
  //   >navlink is here</NavLink>
  // };

  return (
    <div className="flex justify-center items-center drop-shadow-2xl">
      <form
        className="bg-gray-600 bg-opacity-75 text-black h-96 w-72 px-3 py-1 rounded-lg"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <label className="text-white text-xl" htmlFor="Topic">
          Topic
        </label>
        <br />
        <input
          type="text"
          id="Topic"
          placeholder="Topic"
          name="Topic"
          className="w-64 h-8 text-lg rounded-sm"
          value={values.Topic}
          onChange={handleChange}
        />
        <br />
        <label className="text-white text-xl" htmlFor="Title">
          Title
        </label>
        <br />
        <input
          required
          type="text"
          placeholder="Title"
          id="Title"
          name="Title"
          className="w-64 h-8 text-lg rounded-sm"
          value={values.Title}
          onChange={handleChange}
        />
        <br />
        <label className="text-white text-xl" htmlFor="SubTitle">
          SubTitle
        </label>
        <br />
        <input
          type="text"
          placeholder="SubTitle"
          id="SubTitle"
          name="SubTitle"
          className="w-64 h-8 text-lg rounded-sm"
          value={values.SubTitle}
          onChange={handleChange}
        />
        <br />
        <label className="text-white text-xl" htmlFor="Description">
          Description
        </label>
        <br />
        <textarea
          required
          type="text"
          name="Description"
          id="Description"
          placeholder="Description"
          rows={5}
          cols={29}
          className="text-lg rounded-sm"
          value={values.Description}
          onChange={handleChange}
        ></textarea>
        <br />
        <button
          className="text-white text-xl"
          type="submit"
          // onClick={handleClick}
        >
          Submit
        </button>
        <button className="text-white text-xl ml-36" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}
