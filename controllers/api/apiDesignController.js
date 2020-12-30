const Design = require('../../models/Design');

module.exports = {
    getDesign: async (req, res) => {
      try {
        const design = await Design.find()
        res.status(200).json({
          design
        })
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    },
}