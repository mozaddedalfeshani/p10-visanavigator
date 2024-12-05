import React, { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        requiredDocuments: checked
          ? [...prevData.requiredDocuments, value]
          : prevData.requiredDocuments.filter((doc) => doc !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add user email to the formData
    const dataToSubmit = {
      ...formData,
      userEmail: user?.email || "No user email",
    };

    const jsonData = JSON.stringify(dataToSubmit, null, 2);
    // Send the JSON data to the server
    console.log(jsonData);
    //send data to the server
    fetch("http://localhost:8000/addVisa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("Done sending data to the server");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex  justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-lg shadow-lg my-4 shadow-lg bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Add Visa</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Country Image:
            </label>
            <input
              type="text"
              name="countryImage"
              value={formData.countryImage}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Country Name:
            </label>
            <input
              type="text"
              name="countryName"
              value={formData.countryName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Visa Type:</label>
            <select
              name="visaType"
              value={formData.visaType}
              onChange={handleChange}
              className="select select-bordered w-full">
              <option value="">Select Visa Type</option>
              <option value="Tourist visa">Tourist visa</option>
              <option value="Student visa">Student visa</option>
              <option value="Official visa">Official visa</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Processing Time:
            </label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Required Documents:
            </label>
            <div className="flex flex-col space-y-2">
              <div>
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Valid passport"
                  checked={formData.requiredDocuments.includes(
                    "Valid passport"
                  )}
                  onChange={handleChange}
                  className="checkbox checkbox-primary"
                />
                <span className="ml-2">Valid passport</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Visa application form"
                  checked={formData.requiredDocuments.includes(
                    "Visa application form"
                  )}
                  onChange={handleChange}
                  className="checkbox checkbox-primary"
                />
                <span className="ml-2">Visa application form</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Recent passport-sized photograph"
                  checked={formData.requiredDocuments.includes(
                    "Recent passport-sized photograph"
                  )}
                  onChange={handleChange}
                  className="checkbox checkbox-primary"
                />
                <span className="ml-2">Recent passport-sized photograph</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Age Restriction:
            </label>
            <input
              type="number"
              name="ageRestriction"
              value={formData.ageRestriction}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Fee:</label>
            <input
              type="number"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Validity:</label>
            <input
              type="text"
              name="validity"
              value={formData.validity}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Application Method:
            </label>
            <input
              type="text"
              name="applicationMethod"
              value={formData.applicationMethod}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
