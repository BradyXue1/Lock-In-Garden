plants = [
    {"id":1,"name":"Tomato 🍅","watered":0, "waterable":False, "location":2, "goal_id":1},
    {"id":2,"name":"Strawberry 🍓","watered":0, "waterable":False, "location":4, "goal_id":2},
    {"id":3,"name":"Sunflower 🌻","watered":0, "waterable":False, "location":3, "goal_id":3},
]
'''
    Future plants?
    {"id":4,"name":"Corn 🌽","watered":0, "waterable":False, "location":-1},
    {"id":5,"name":"Chili Pepper 🌶️","watered":0, "waterable":False, "location":-1},
    {"id":6,"name":"Broccoli 🥦","watered":0, "waterable":False, "location":-1},
    {"id":7,"name":"Carrot 🥕","watered":0, "waterable":False, "location":-1},
    {"id":8,"name":"Basil 🌿","watered":0, "waterable":False, "location":-1},
    {"id":9,"name":"Tulip 🌷","watered":0, "waterable":False, "location":-1},
    {"id":10,"name":"Potato 🥔","watered":0, "waterable":False, "location":-1},
    {"id":11,"name":"Marigold 🌼","watered":0, "waterable":False, "location":-1},
    {"id":12,"name":"Lily 💮","watered":0, "waterable":False, "location":-1},
    {"id":13,"name":"Petunia 🌸","watered":0, "waterable":False, "location":-1},
    {"id":14,"name":"Pumpkin 🎃","watered":0, "waterable":False, "location":-1},
    {"id":15,"name":"Wheat 🌾","watered":0, "waterable":False, "location":-1},
    '''
def get_plants():
    return plants

def water_plant(plant_id):
    for plant in plants:
        if plant["id"] == plant_id:
            if plant["waterable"]:
                plant["watered"] += 1
                return plant
    return None

def reset_plants():
    for plant in plants:
        plant["watered"] = 0
        plant["waterable"] = False
    return plants

def is_plant_waterable(plant_id):
    for plant in plants:
        if plant["id"] == plant_id:
            return plant["waterable"]
    return False

def set_plant_waterablility(plant_id, waterable):
    for plant in plants:
        if plant["id"] == plant_id:
            plant["waterable"] = waterable
            return plant
    return None