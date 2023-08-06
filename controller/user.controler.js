exports.userCreate = async (req, res, next) => {
    try {
      // Get data from body
      const data = req.body;
      console.log("Data =>",data);
    }
    catch(err)
    {
        console.log("catch error =>",err);
    }
}