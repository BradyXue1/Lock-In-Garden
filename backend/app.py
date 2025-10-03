from flask import Flask
from flask_cors import CORS

from routes.plant_routes import plant_routes
from routes.goal_routes import goal_routes
from routes.quest_routes import quest_routes

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://localhost:5000"])

# register blueprints
app.register_blueprint(plant_routes, url_prefix="/plants")
app.register_blueprint(goal_routes, url_prefix="/goals")
app.register_blueprint(quest_routes, url_prefix="/quests")

@app.route("/")
def home():
    return "Hello from Flask!"

if __name__ == "__main__":
    app.run(debug=True)
