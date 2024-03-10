import { json } from "express";
import mongoose from "mongoose";
const PackageSchema = new mongoose.Schema(
  {
    PackageNo: String,
    Package_name: String,
    Reviews:String,
    Review_star: String,
    Main_style: String,
    Destination: String,
    Age_range: String,
    Country_region: String,
    Operated_in: String,
    Operator: String,
    Price: String,
    Duration: String,
    img_link :String,
    days:{
      type:[Object]
    },
    intro:String,
    itinerary:String,
    imagelist : [String],
    map_link:String

  }
);

export default mongoose.model("package", PackageSchema);
