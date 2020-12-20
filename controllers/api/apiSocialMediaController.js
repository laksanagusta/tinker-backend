const Product = require('../../models/Product');
const Treveler = require('../../models/Booking');
const Category = require('../../models/Category');
const Bank = require('../../models/Bank');
const Booking = require('../../models/Booking');
const Member = require('../../models/Member');
const User = require('../../models/User');
const ShippingAddress = require('../../models/ShippingAddress');
const SocialMedia = require('../../models/SocialMedia');

module.exports = {
    getSocialMedia: async (req, res) => {
      try {
        const socialMedia = await SocialMedia.find()
        res.status(200).json({
          socialMedia
        })
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    },
}