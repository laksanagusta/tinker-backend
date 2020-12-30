const fs = require('fs-extra')
const path = require('path')
const Description = require('../models/Description')
const Product = require('../models/Product')
const formidable = require('formidable')

module.exports = {
  addDescription: async (req, res) => {
    const { title, productId, about, position } = req.body;
    try {  
        const descriptions = await Description.create({
            title,
            productId,
            description:about,
            position,
            imageUrl : `${req.imagePath}`
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
      const { id, title, productId, about, position } = req.body;
      try {
        const descriptions = await Description.findOne({ _id: id }); 
        if (req.imagePath === undefined) {
          descriptions.title = title;
          descriptions.description = about;
          descriptions.position = position;
          await descriptions.save();
          req.flash('alertMessage', 'Success Update description');
          req.flash('alertStatus', 'success');
          res.redirect(`/product/show-detail-product/${productId}`);
        } else {
          descriptions.title = title;
          descriptions.description = about;
          descriptions.position = position;
          descriptions.imageUrl = `${req.imagePath}`
          await descriptions.save();
          req.flash('alertMessage', 'Success Update Description');
          req.flash('alertStatus', 'success');
          res.redirect(`/product/show-detail-product/${productId}`);
        }
      } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect(`/product/show-detail-product/${productId}`);
      }
    },
    deleteDescription: async (req, res) => {
      const { id } = req.body;
      try {
        const descriptions = await Description.findOne({ _id: id }); 
        await descriptions.remove();
        req.flash('alertMessage', 'Success Delete description');
        req.flash('alertStatus', 'success');
        res.redirect(`/admin/product`);
    } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect(`/admin/product`);
      }
    },
}