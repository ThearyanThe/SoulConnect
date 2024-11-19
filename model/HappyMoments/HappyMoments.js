const happyMomentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true }, 
    shared_with: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    created_at: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("HappyMoment", happyMomentSchema);