const fetch = require("node-fetch");

exports.adviceGenerator = async (req, res, next) => {
  // const name = req.body.name;
  try {
    const response = await fetch(`${process.env.STRIP_API}`); //"https://api.adviceslip.com/advice"
    if (!response.ok) {
      throw new Error("Something Went Wrong💀💀");
    }
    const responseData = await response.json();
    res.status(200).json({
      message: "success",
      slip: { ...responseData.slip },
    });
  } catch (err) {
    next(err);
  }
};
