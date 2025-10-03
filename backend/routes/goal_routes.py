from flask import Blueprint, jsonify
from services.goal_services import get_goals, increment_goal, reset_goals

goal_routes = Blueprint("goals", __name__)

@goal_routes.get("/")
def list_goals():
    return jsonify(get_goals())

@goal_routes.post("/<int:goal_id>/increment")
def increment(goal_id):
    updated = increment_goal(goal_id)
    if updated:
        return jsonify(updated)
    return jsonify({"error": "Goal not found"}), 404

@goal_routes.post("/reset")
def reset():
    return jsonify(reset_goals())