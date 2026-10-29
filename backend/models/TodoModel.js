const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
      priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    dueDate: {
      type: Date,
    },

    completed: {
      type: Boolean,
      default: false,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",

    }
},
    { timestamps: true }
)
module.exports = mongoose.model("Todo", todoSchema);