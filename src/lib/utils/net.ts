import { API_URL } from "../config/api-url";

interface ApiResponse<T> {
  message: string;
  data: T;
}

const url = (path: string) => {
  const url = `${API_URL}${path}`;
  return url;
};

const headers = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return headers;
};

export const post = async <DTO, DAO>(path: string, payload?: DTO) => {
  let data: ApiResponse<DAO | null> | null = null;
  let error: ApiResponse<Error | null> | Error | null = null;

  try {
    const resp = await fetch(url(path), {
      method: "POST",
      credentials: "include",
      headers: headers(),
      body: JSON.stringify(payload),
    });

    const json = await resp.json();

    if (!resp.status.toString().startsWith("2")) {
      throw new Error(json?.message || "Something went wrong");
    }

    data = json;
  } catch (err) {
    error = err as Error;
  }

  return { data, error };
};

export const put = async <DTO, DAO>(path: string, payload?: DTO) => {
  let data: ApiResponse<DAO | null> | null = null;
  let error: ApiResponse<Error | null> | Error | null = null;

  try {
    const resp = await fetch(url(path), {
      method: "PUT",
      credentials: "include",
      headers: headers(),
      body: JSON.stringify(payload),
    });

    const json = await resp.json();

    if (!resp.status.toString().startsWith("2")) {
      throw new Error(json?.message || "Something went wrong");
    }

    data = json;
  } catch (err) {
    error = err as Error;
  }

  return { data, error };
};

export const del = async <DTO, DAO>(path: string, payload?: DTO) => {
  let data: ApiResponse<DAO | null> | null = null;
  let error: ApiResponse<Error | null> | Error | null = null;

  try {
    const resp = await fetch(url(path), {
      method: "DELETE",
      credentials: "include",
      headers: headers(),
      body: JSON.stringify(payload),
    });

    const json = await resp.json();

    if (!resp.status.toString().startsWith("2")) {
      throw new Error(json?.message || "Something went wrong");
    }

    data = json;
  } catch (err) {
    error = err as Error;
  }

  return { data, error };
};

export const get = async <DAO>(path: string) => {
  let data: ApiResponse<DAO | null> | null = null;
  let error: ApiResponse<Error | null> | Error | null = null;

  try {
    const resp = await fetch(url(path), {
      method: "GET",
      credentials: "include",
      headers: headers(),
    });

    const json = await resp.json();

    if (!resp.status.toString().startsWith("2")) {
      throw new Error(json?.message || "Something went wrong");
    }

    data = json;
  } catch (err) {
    error = err as Error;
  }

  return { data, error };
};
