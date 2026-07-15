import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const PYTHON_API =
  process.env.PYTHON_API || "http://127.0.0.1:8000";

export const predictWithPython = async (
  imagePath: string
) => {

  const formData = new FormData();

  formData.append(
    "file",
    fs.createReadStream(imagePath)
  );

  const response = await axios.post(
    `${PYTHON_API}/predict`,
    formData,
    {
      headers: formData.getHeaders(),
      timeout: 30000
    }
  );

  return response.data;

};