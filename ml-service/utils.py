def get_risk_level(probability: float) -> str:
	return "HIGH" if probability > 0.6 else "LOW"


def get_recommendation(probability: float) -> str:
	if probability > 0.75:
		return "Immediate mitigation needed: reroute shipment and notify operations"
	if probability > 0.6:
		return "Use alternate vendor or expedited route"
	return "Proceed with current plan"
