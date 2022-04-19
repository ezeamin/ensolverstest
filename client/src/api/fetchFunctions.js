import Swal from "sweetalert2";
import axios from "./axios";

// initiate server

export const pingServer = async () => {
  await axios.get("/api/ping");
};

export const fetchData = async (method, link, info) => {
  let res, data;
  const token = localStorage.getItem("token");

  try {
    if (method === "get") {
      res = await axios[method](link, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      res = await axios[method](link, info, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    }
    data = {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    let msg = err.response ? err.response.data : err;
    let status = err.response ? err.response.status : err;

    data = {
      status: status,
      data: msg,
    };
  }
  return data;
};

export const logout = (home) => {
  localStorage.removeItem("token");

  Swal.fire({
    title: "Bye!",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    window.location.href = "/";
  });
};
