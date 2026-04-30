const axios = require("axios");

exports.predictDelay = async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/predict",
      req.body
    );

    res.json(response.data);

  } catch (error) {
    res.status(500).json({
      message: "AI service error",
      error: error.message
    });
  }
};