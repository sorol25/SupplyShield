from fastapi import FastAPI
import joblib
import numpy as np

from schema import PredictionInput

app = FastAPI()

model = joblib.load("model/delay_model.pkl")


@app.post("/predict")
def predict(data: PredictionInput):
	input_data = np.array([
		data.distance,
		data.weather_risk,
		data.vendor_score,
	]).reshape(1, -1)

	prediction = model.predict(input_data)[0]
	probability = model.predict_proba(input_data)[0][1]

	return {
		"delay_prediction": int(prediction),
		"risk_probability": float(probability),
		"risk_level": "HIGH" if probability > 0.6 else "LOW",
		"recommendation": "Use alternate vendor or expedited route" if probability > 0.6 else "Proceed with current plan",
	}
