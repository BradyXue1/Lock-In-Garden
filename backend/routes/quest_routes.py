from flask import Blueprint, jsonify
from services.quest_services import get_quests

quest_routes = Blueprint("quests", __name__)

@quest_routes.get("/")
def list_quests():
    return jsonify(get_quests())
