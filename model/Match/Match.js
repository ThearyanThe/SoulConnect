const matchSchema = new mongoose.Schema({
    user1_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    user2_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    match_reason: { type: String },
    created_at: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Match", matchSchema);