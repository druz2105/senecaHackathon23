import pickle

import pandas as pd


def index_handler(data: dict, context):
    model_rfc = pickle.load(open('model_rfc.pkl', 'rb'))
    model_dtc = pickle.load(open('model_dtc.pkl', 'rb'))
    test_frame = pd.DataFrame.from_dict(data, orient='index').T
    prediction_rfc = model_rfc.predict(test_frame)
    prediction_dtc = model_dtc.predict(test_frame)
    if 0 in prediction_dtc and 0 in prediction_rfc:
        return {"status": "200", "risk": "Safe"}
    elif 1 in prediction_dtc and 1 in prediction_rfc:
            return {"status": "200", "risk": "Danger"}
    else:
        return {"status": "200", "risk": "Warning"}
