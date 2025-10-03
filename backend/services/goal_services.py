goals = [
    {"id":1,"title":"Eat meals","count":0, "target":3, "pass":2, "fail":[0,1]},
    {"id":2,"title":"Drink water", "count":0, "target":8, "pass":[6,7], "fail":[0,5]},    
    {"id":3,"title":"Sleep", "count":0, "target":8, "pass":[6,7], "fail":[0,5]},
]

def increment_goal(goal_id):
    for goal in goals:
        if goal["id"] == goal_id:
            goal["count"] += 1
            return goal
    return None

def get_goals():
    return goals

def reset_goals():
    for goal in goals:
        goal["count"] = 0
    return goals
