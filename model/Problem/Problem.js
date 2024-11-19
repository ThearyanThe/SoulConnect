const problemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    created_at: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Problem", problemSchema);