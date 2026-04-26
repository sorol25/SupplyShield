from pydantic import BaseModel


class PredictionInput(BaseModel):
    distance: int
    weather_risk: int
    vendor_score: int
