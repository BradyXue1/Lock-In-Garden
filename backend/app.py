
from flask import Flask, jsonify
app = Flask(__name__)

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