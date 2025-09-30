
from flask import Flask, jsonify
app = Flask(__name__)

plants=[
    {"id":1,"name":"Tomato","watered":0},
    {"id":2,"name":"Basil","watered":0},
    {"id":3,"name":"Carrot","watered":0},
    {"id":4,"name":"Potato","watered":0},
    {"id":5,"name":"Wheat","watered":0},
    {"id":6,"name":"Beetroot","watered":0},
    {"id":7,"name":"Sunflower","watered":0},
    {"id":8,"name":"Rose","watered":0},
    {"id":9,"name":"Tulip","watered":0},
    {"id":10,"name":"Strawberry","watered":0},
    {"id":11,"name":"Marigold","watered":0},
    {"id":12,"name":"Lily","watered":0},
    {"id":13,"name":"Petunia","watered":0},
    {"id":14,"name":"Pumpkin","watered":0},
    {"id":15,"name":"Parsnip","watered":0},
]

@app.route('/')
def home():
    return "Hello from Flask!"

# New route to return sample goals
@app.route('/goals')
def get_goals():
    sample_goals = [
        {"id": 1, "title": "Exercise daily", "completed": False},
        {"id": 2, "title": "Read a book", "completed": True},
        {"id": 3, "title": "Meditate", "completed": False}
    ]
    return jsonify(sample_goals)

if __name__ == '__main__':
    app.run(debug=True)