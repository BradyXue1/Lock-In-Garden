from services.plant_services import plants

goals = [
    {"id":1,"title":"Eat meals","count":0, "target":3, "pass":2, "fail":[0,1]},
    {"id":2,"title":"Drink water", "count":0, "target":8, "pass":[6,7], "fail":[0,5]},    
    {"id":3,"title":"Sleep", "count":0, "target":8, "pass":[6,7], "fail":[0,5]},
]

def increment_goal(goal_id):
    """
    Increment a goal's count. If the goal reaches or exceeds its target,
    mark all plants with that goal_id as waterable.
    """
    updated_goal = None
    for goal in goals:
        if goal["id"] == goal_id:
            goal["count"] += 1
            updated_goal = goal
            break

    if updated_goal is not None:
        # update waterable status for plants
        for plant in plants:
            if plant.get("goal_id") == goal_id:
                plant["waterable"] = is_goal_completed(goal_id)
    return updated_goal


def get_goals():
    return goals


def reset_goals():
    """
    Reset all goals and plants.
    """
    for goal in goals:
        goal["count"] = 0
    for plant in plants:
        plant["waterable"] = False
    return goals


def is_goal_completed(goal_id):
    for goal in goals:
        if goal["id"] == goal_id:
            return goal["count"] >= goal["target"]
    return False


def did_goal_fail(goal_id):
    for goal in goals:
        if goal["id"] == goal_id:
            return goal["count"] in goal["fail"]
    return False
