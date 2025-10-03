from flask import Blueprint, jsonify
from services.goal_services import get_goals

goal_routes = Blueprint("goals", __name__)

@goal_routes.get("/")
def list_goals():
    return jsonify(get_goals())
