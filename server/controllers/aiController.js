const axios = require("axios");

exports.predictDelay = async (req, res) => {
  try {
    const response = await axios.post("http://localhost:8000/predict", req.body);

    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({
      message: "AI service error",
      error: error.message,
    });
  }
};
