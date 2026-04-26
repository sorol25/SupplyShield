import os

import joblib
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

# fake dataset (you can replace later with real data)
data = {
    "distance": [100, 500, 1000, 2000, 300],
    "weather_risk": [0, 1, 1, 2, 0],
    "vendor_score": [8, 4, 3, 2, 9],
    "delay": [0, 1, 1, 1, 0],
}


def main() -> None:
    df = pd.DataFrame(data)

    x = df[["distance", "weather_risk", "vendor_score"]]
    y = df["delay"]

    model = RandomForestClassifier(random_state=42)
    model.fit(x, y)

    os.makedirs("model", exist_ok=True)
    joblib.dump(model, "model/delay_model.pkl")

    print("Model trained and saved")


if __name__ == "__main__":
    main()
