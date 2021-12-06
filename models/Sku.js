import mongoose from "mongoose";

const skuSchema = new mongoose.Schema(
  {
    item: String,
    sum: Number,
    currency: String,
  }, {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.models.Sku || mongoose.model("Sku", skuSchema);
