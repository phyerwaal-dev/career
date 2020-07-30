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


if __name__ == "__main__":
    app.run(debug=True)


#  {id: 1, val: 1, question: "Write logic to Make bank transactions automated", select: "Agree"}, {id: 2, val: 0, question: "Develop Games / Software", select: "Strongly Agree"}, {id: 3, val: 1, question: "To know how the internet works, build websites", select: "Agree"}, {id: 4, val: 3, question: "Develop, Load and manage computer software over a large computer network", select: "Disagree"}, {id: 5, val: 4, question: "Compute and record statistical and other numerical data,to find out a suitable solution", select: "Strongly Disagree"}, {id: 6, val: 3, question: "Maintain/develop cloud infrastructure like AWS, GCP", select: "Disagree"}, {id: 7, val: 1, question: "Build an  operating system like Windows, MacOS, Android, iOS", select: "Agree"}, {id: 8, val: 4, question: "Build motherboards for various systems", select: "Strongly Disagree"}, {id: 9, val: 2, question: "Identify objects from images using machine learning", select: "Neutral"}, {id: 10, val: 0, question: "Writing computer programs for various purposes", select: "Strongly Agree"}, {id: 11, val: 3, question: "Develop satellite communication systems", select: "Disagree"}, {id: 12, val: 4, question: "Design electronic control systems for vehicles, airplanes, ships, rockets", select: "Strongly Disagree"}, {id: 13, val: 3, question: "Learn about circuit boards, processors, chips, electronic system design", select: "Disagree"}, {id: 14, val: 2, question: "Design robotic control units", select: "Neutral"}, {id: 15, val: 4, question: "Design electronic home automation systems", select: "Strongly Disagree"}, {id: 16, val: 1, question: "Understand how the mobile and other telecommunication devices works", select: "Agree"}, {id: 17, val: 4, question: "Develop power supply tools and equipment", select: "Strongly Disagree"}, {id: 18, val: 0, question: "Make a self driving car, Build robotic parts", select: "Strongly Agree"}, {id: 19, val: 4, question: "Repair/create machines, Create a mechanism to reduce water pollution from industry", select: "Strongly Disagree"}, {id: 20, val: 4, question: "Assemble/build Products in a manufacturing unit", select: "Strongly Disagree"}, {id: 21, val: 1, question: "Create an exoskeleton to increase strength, (like iron man)", select: "Agree"}, {id: 22, val: 1, question: "Build a remote controlled plane / quadcopter / car", select: "Agree"}, {id: 23, val: 3, question: "Build a rocket engines for interstellar travel like elon musk", select: "Disagree"}, {id: 24, val: 2, question: "Develop machinery to make tasks easier, or automate them", select: "Neutral"}, {id: 25, val: 4, question: "Visualize plans for an open space.(E.g. being able… a room will look if the furniture is rearranged)", select: "Strongly Disagree"}, {id: 26, val: 4, question: "Try to visualize architectural structure by looking at any building/bridges/roads etc.", select: "Strongly Disagree"}, {id: 27, val: 4, question: "Determine efficient plans/methods for water manage…ervation, Finding better water irrigation methods", select: "Strongly Disagree"}, {id: 28, val: 2, question: "Finding ways to keep development in process with least deforestation", select: "Neutral"}, {id: 29, val: 4, question: "To research a new ways for making roads more durable", select: "Strongly Disagree"}, {id: 30, val: 4, question: "Gain Knowledge of materials, methods, and the tool…s, or other structures such as highways and roads", select: "Strongly Disagree"}, {id: 31, val: 4, question: "Knowledge of design techniques, tools, and princip…technical plans, blueprints, drawings, and models", select: "Strongly Disagree"}

# ,{id: 32, val: 1, question: "Develop a way to better predict the weather with some technology.", select: "Agree"},{id: 33, val: 2, question: "Enter information into a computer database.", select: "Neutral"},{id: 34, val: 0, question: "Do you like writing computer programs for various purposes?", select: "Strongly Agree"},{id: 35, val: 1, question: "Want to hack/breach into a computer system.", select: "Agree"},{id: 36, val: 3, question: "Like solving complex math problems.", select: "Disagree"},{id: 37, val: 0, question: "Fascinated about computer processors and GPUs.", select: "Strongly Agree"},{id: 38, val: 0, question: "Try to solve an application error or computer booting error by yourself.", select: "Strongly Agree"},{id: 39, val: 0, question: "Are you interested to know the working of virtual assistant (like google assistant/Alexa)?", select: "Strongly Agree"},{id: 40, val: 0, question: "Work on new computer operating system.", select: "Strongly Agree"},{id: 41, val: 2, question: "Develop a machine learning algorithm.", select: "Neutral"},{id: 42, val: 4, question: "Design antennas for wireless communication.", select: "Strongly Disagree"},{id: 43, val: 4, question: "Design electronic control systems for electric vehicles.", select: "Strongly Disagree"},{id: 44, val: 3, question: "Design an automated home lighting system", select: "Disagree"},{id: 45, val: 3, question: "Knowledge of machines and tools, including their designs, uses, repair, and maintenance.", select: "Disagree"},{id: 46, val: 4, question: "Installing equipment, machines, wiring meet specifications.", select: "Strongly Disagree"},{id: 47, val: 4, question: "Design and build sports cars chassis, engine etc.", select: "Strongly Disagree"},{id: 48, val: 4, question: "Trying to provide better water quality/supply to the villages where there is shortage of water.", select: "Strongly Disagree"},{id: 49, val: 4, question: "Trying to find the materials used to develop a road/bridge/railway-track.", select: "Strongly Disagree"},{id: 50, val: 4, question: "Finding better water irrigation methods.", select: "Strongly Disagree"}
app = Flask(__name__)
