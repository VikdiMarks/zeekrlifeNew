import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://h163879.srv11.test-hf.su/crm/api/zeekr",
  timeout: 100000,
});

export async function getVersions() {
  const res = await axiosInstance.get("/versions");

  return res.data;
}

export async function getColors() {
  const res = await axiosInstance.get("/colors");

  return res.data;
}

export async function getInteriors() {
  const res = await axiosInstance.get("/interiors");

  return res.data;
}

export async function getOptions() {
  const res = await axiosInstance.get("/options");

  return res.data;
}

export async function getSoftware() {
  const res = await axiosInstance.get("/software");

  return res.data;
}

export async function getWheels() {
  const res = await axiosInstance.get("/wheels");

  return res.data;
}

export async function submitOrder(data) {
  const res = await axiosInstance.get("/lead_form");

  return res.data;
}
