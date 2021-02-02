const Experience = require('../../models/Experience');

module.exports = {
    getExperience: async (req, res) => {
      try {
        const experience = await Experience.find().sort({ _id:-1 })
        res.status(200).json({
          experience
        })
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    },
}