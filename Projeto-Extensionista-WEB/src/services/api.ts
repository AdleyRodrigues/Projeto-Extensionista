import { IFilterData, IFormData } from "../utils/interface";

const BASE_URL = "http://localhost:5000";

export const createUser = (form: IFormData) => {
  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

export const getBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/books`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getBookDetailsById = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching book details:", error);
    throw error;
  }
};

export const getFilterById = async (filter: IFilterData) => {
  try {
    const response = await fetch(
      `${BASE_URL}/ranking?city=${filter.city}&school=${filter.school}&class=${filter.class}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching book details:", error);
    throw error;
  }
};
