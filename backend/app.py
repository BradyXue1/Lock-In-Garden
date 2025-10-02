from flask_cors import CORS
from flask import Flask, jsonify


app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://localhost:5000"])

plants=[
    {"id":1,"name":"Tomato","watered":0, "location":2},
    {"id":2,"name":"Basil","watered":0, "location":-1},
    {"id":3,"name":"Carrot","watered":0, "location":-1},
    {"id":4,"name":"Potato","watered":0, "location":-1},
    {"id":5,"name":"Wheat","watered":0, "location":-1},
    {"id":6,"name":"Beetroot","watered":0, "location":-1},
    {"id":7,"name":"Sunflower","watered":0, "location":-1},
    {"id":8,"name":"Rose","watered":0, "location":-1},
    {"id":9,"name":"Tulip","watered":0, "location":4},
    {"id":10,"name":"Strawberry","watered":0, "location":3},
    {"id":11,"name":"Marigold","watered":0, "location":-1},
    {"id":12,"name":"Lily","watered":0, "location":-1},
    {"id":13,"name":"Petunia","watered":0, "location":-1},
    {"id":14,"name":"Pumpkin","watered":0, "location":-1},
    {"id":15,"name":"Parsnip","watered":0, "location":-1},
]

goals=[
    {"id":1,"title":"Eat meals","count":0, "target":3, "pass":2, "fail": [0,1]},
    {"id":2,"title":"Drink water", "count":0, "target":8, "pass":[6,7], "fail": [0,5]},    
    {"id":3,"title":"Sleep", "count":0, "target":8, "pass":[6,7], "fail": [0,5]},
]

quests=[
    {"id":1, "title": "Log in 3 times", "count":0, "target":3, "pass":3, "fail":[0,2]},
    {"id":2, "title": "Water your plants a total of 10 times", "count":0, "target":10, "pass":10, "fail":[0,9]},
    {"id":3, "title": "Level up a plant", "count":0, "target":1, "pass":1, "fail":0},
    
]
@app.route('/')
def home():
    return "Hello from Flask!"

@app.route('/goals', methods=['GET'])
def get_goals():
    return jsonify(goals)

@app.route('/plants', methods=['GET'])
def get_plants():
    return jsonify(plants)

@app.route('/quests', methods=['GET'])
def get_quests():
    return jsonify(quests)

if __name__ == '__main__':
    app.run(debug=True)