import Package from "../models/Package.js";
import Axios from 'axios';
export const getRecPackages = async (req, res, next) => {
    const { min, max, city,style,price,duration,...others } = req.query;

    var link = `https://zennyrox.pythonanywhere.com/request/?destination=${city}&price=${price}&main_style=${style}&duration=${duration}`
   // var link = `https://zennyrox.pythonanywhere.com/request/?destination=New Delhi&price=50000&main_style=Explorer`

    const firstreclist =await Axios.get(link)
    const reclist =firstreclist.data.result
    try {
      const packages = await Package.find({
        Price: { $gt: min | 1, $lt: max || 999 },
        PackageNo:{$in: reclist}
      });

      function sortByPackageNo(a, b) {
        const indexA = reclist.indexOf(a.PackageNo);
        const indexB = reclist.indexOf(b.PackageNo);
        return indexA - indexB;
      }
      
      // Sort the packages array using the custom sorting function
      const sortedPackages = packages.sort(sortByPackageNo);
      res.status(200).json(sortedPackages);
    } catch (err) {
      next(err);
    }
  
   
  };