from flask import Blueprint, jsonify
from services.plant_services import get_plants, water_plant, reset_plants

plant_routes = Blueprint("plants", __name__)

@plant_routes.get("/")
def list_plants():
    return jsonify(get_plants())

@plant_routes.post("/<int:plant_id>/water")
def water(plant_id):
    updated = water_plant(plant_id)
    if updated:
        return jsonify(updated)
    return jsonify({"error": "Plant not found"}), 404

@plant_routes.post("/reset")
def reset():
    return jsonify(reset_plants())
