import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# fake dataset (you can replace later with real data)
data = {
    "distance": [100, 500, 1000, 2000, 300],
    "weather_risk": [0, 1, 1, 2, 0],
    "vendor_score": [8, 4, 3, 2, 9],
    "delay": [0, 1, 1, 1, 0]
}

df = pd.DataFrame(data)

X = df[["distance", "weather_risk", "vendor_score"]]
y = df["delay"]

model = RandomForestClassifier()
model.fit(X, y)

joblib.dump(model, "model/delay_model.pkl")

print("Model trained and saved")