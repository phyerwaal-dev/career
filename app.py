from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import xgboost
import sklearn
import json
from pandas.io.json import json_normalize
import pandas as pd
import numpy as np
from statistics import mode
import pymongo
app = Flask(__name__)
CORS(app)

# loading models
xg = joblib.load("models/xg.pkl")   # xgboost highest accuacy
nb = joblib.load("models/nb.pkl")   # naive bayes 3rd
lr = joblib.load("models/lr.pkl")   # logistic regerssion 5th
rf = joblib.load("models/rf.pkl")   # naive bayes 2nd
# knn = joblib.load("models/knn.pkl")  # naive bayes 6thrd
dt = joblib.load("models/dt.pkl")   # naive bayes 4th
svc = joblib.load("models/svc.pkl")   # naive bayes 4th
kmeans = joblib.load("models/kmeans.pkl")
ohe = joblib.load("encoders/ohe.pkl")
le = joblib.load("encoders/le.pkl")  # dependent var
le_x = joblib.load("encoders/le_x.pkl")  # independent var for kmeans
clusters = [{'Civil': 23,
             'Computers': 30,
             'EXTC': 30,
             'IT': 42,
             'Mechanical': 58,
             'cluster': 0},
            {'Civil': 32,
             'Computers': 25,
             'EXTC': 23,
             'IT': 56,
             'Mechanical': 39,
             'cluster': 1},
            {'Civil': 24,
             'Computers': 36,
             'EXTC': 29,
             'IT': 32,
             'Mechanical': 49,
             'cluster': 2},
            {'Civil': 12,
             'Computers': 22,
             'EXTC': 20,
             'IT': 21,
             'Mechanical': 33,
             'cluster': 3},
            {'Civil': 20,
             'Computers': 31,
             'EXTC': 43,
             'IT': 54,
             'Mechanical': 79,
             'cluster': 4}]


@app.route('/')
@app.route("/submit-data", methods=["POST"])
def submit():
    try:

        val = request.json
        dict_df = {}

        for d in val["data"]:
            dict_df[d["question"]] = [d["select"]]
        # print(dict_df)
        df = pd.DataFrame.from_dict(dict_df)

        df = df.iloc[0:1, :].values
        df = ohe.transform(df)

        probs = []
        # df = df[0:1, :]
        xg_pred = xg.predict(df)
        xg_pred_proba = xg.predict_proba(df)

        rf_pred = rf.predict(df)
        rf_pred_proba = rf.predict_proba(df)

        svc_pred = svc.predict(df.toarray())
        svc_pred_proba = svc.predict_proba(df.toarray())

        nb_pred = nb.predict(df.toarray())
        nb_pred_proba = nb.predict_proba(df.toarray())

        dt_pred = dt.predict(df)

        lr_pred = lr.predict(df)
        lr_pred_proba = lr.predict_proba(df)

        df2 = pd.DataFrame.from_dict(dict_df)
        df2 = df2.iloc[0:1, :].values
        for i in range(0, df2.shape[1]):
            df2[:, i] = le_x.transform(df2[:, i])
        cluster = kmeans.predict(df2)
        cluster = clusters[cluster[0]]
        print(cluster)
        br = []
        br.append(le.inverse_transform(xg_pred)[0])
        br.append(le.inverse_transform(rf_pred)[0])   #
        br.append(le.inverse_transform(nb_pred)[0])
        br.append(le.inverse_transform(svc_pred)[0])
        br.append(le.inverse_transform(lr_pred)[0])
        br.append(le.inverse_transform(dt_pred)[0])

        probs.append(xg_pred_proba[0])
        probs.append(rf_pred_proba[0])
        probs.append(nb_pred_proba[0])
        probs.append(svc_pred_proba[0])
        probs.append(lr_pred_proba[0])

        probs = (lr_pred_proba[0]+svc_pred_proba[0] +
                 nb_pred_proba[0]+rf_pred_proba[0]+xg_pred_proba[0])/5
        probs = np.ndarray.tolist(probs)
        print(br, probs)
        return jsonify({
            "branch": mode(br),
            "cluster": cluster,
            "probabilities": probs
        }), 200
    except Exception as e:
        return jsonify({
            "error": e
        }), 400


@app.route("/save-data", methods=["POST"])
def save_data():
    try:
        val = request.json
        myclient = pymongo.MongoClient("")
        mydb = myclient['career']
        mycol = mydb["data"]
        mycol.insert_one(val)
        return jsonify({
            "message": "data saved for future models"
        }), 200
    except Exception as e:
        return jsonify({
            "error": e
        }), 400


@app.route("/save-info", methods=["POST"])
def save_data():
    try:
        val = request.json
        myclient = pymongo.MongoClient("")
        mydb = myclient['career']
        mycol = mydb["info"]
        mycol.insert_one(val)
        return jsonify({
            "message": "info saved"
        }), 200
    except Exception as e:
        return jsonify({
            "error": e
        }), 400


if __name__ == "__main__":
    app.run(debug=True)

app = Flask(__name__)
