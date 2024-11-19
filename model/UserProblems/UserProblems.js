const userProblemSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    problem_id: { type: mongoose.Schema.Types.ObjectId, ref: "Problem", required: true },
    severity: { type: Number, min: 1, max: 5 }, 
  });
  
  module.exports = mongoose.model("UserProblem", userProblemSchema);