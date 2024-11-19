const userGoalSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    goal_id: { type: mongoose.Schema.Types.ObjectId, ref: "Goal", required: true },
    priority: { type: Number, min: 1, max: 3 },
  });
  
  module.exports = mongoose.model("UserGoal", userGoalSchema);