const Product = require('../models/Product')
const Image = require('../models/Image')
const fs = require('fs-extra')
const path = require('path')
const Description = require('../models/Description')
const Feature = require('../models/Feature')

module.exports = {
  addDescription: async (req, res) => {
    const {name, productId, position, about} = req.body;
    try {
        const descriptions = await Description.create({
            title:name,
            productId,
            description:about,
            position,
            imageUrl : `images/${req.file.filename}`
        })

        const product = await Product.findOne({_id: productId})
        product.descriptionId.push({ _id:descriptions._id})
        await product.save()

        req.flash('alertMessage', 'Success Add Description')
        req.flash('alertStatus', 'success')
        res.redirect(`/product/show-detail-product/${productId}`);
    } catch (error) {
        req.flash('alertMessage', `${error.message}`)
        req.flash('alertStatus', 'danger')
        res.redirect(`/product/show-detail-product/${productId}`);
    }
},
    editDescription: async (req, res) => {
        const { id, name, productId, about } = req.body;
        console.log(req.body)
        try {
          const descriptions = await Description.findOne({ _id: id });
          if (req.file == undefined) {
            descriptions.name = name;
            descriptions.description = about;
            await descriptions.save();
            req.flash('alertMessage', 'Success Update description');
            req.flash('alertStatus', 'success');
            res.redirect(`/product/show-detail-product/${productId}`);
          } else {
            await fs.unlink(path.join(`public/${bank.imageUrl}`));
            descriptions.name = name;
            descriptions.description = about;
            descriptions.imageUrl = `images/${req.file.filename}`
            await descriptions.save();
            req.flash('alertMessage', 'Success Update Feature');
            req.flash('alertStatus', 'success');
            res.redirect(`/product/show-detail-product/${productId}`);
          }
        } catch (error) {
          req.flash('alertMessage', `${error.message}`);
          req.flash('alertStatus', 'danger');
          res.redirect(`/product/show-detail-product/${productId}`);
        }
      },
}