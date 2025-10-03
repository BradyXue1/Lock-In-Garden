plants = [
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

def get_plants():
    return plants

def water_plant(plant_id):
    for plant in plants:
        if plant["id"] == plant_id:
            plant["watered"] += 1
            return plant
    return None

def reset_plants():
    for plant in plants:
        plant["watered"] = 0
    return plants
