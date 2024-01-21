import { formData } from "../utils/interface";

const BASE_URL = "http://localhost:5000";

export const createPost = (form: formData) => {
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

export const fetchBooks = async () => {
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

export const fetchBookById = async (id: number) => {
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
