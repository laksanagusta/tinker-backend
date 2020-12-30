const fs = require('fs-extra')
const path = require('path')
const Design = require('../models/Design')
const User = require('../models/User')

module.exports = {
    addDesign: async (req, res) => {
        const {name, duration, title} = req.body;
        try {
            console.log(req.body)
            const design = await Design.create({
                duration,
                title,
                imageUrl,
                description,
                client,
                tag,
                moreDescription
            })

            const tools = {
                name: name,
                icon: icon,
            }
        
            design.tools.push(tools)
            await design.save()

            req.flash('alertMessage', 'Success Add Design')
            req.flash('alertStatus', 'success')
            res.redirect(`/admin/design`);
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/design`);
        }
    },
    editDesign: async (req, res) => {
        const { id, name, duration } = req.body;
        try {
            const design = await Design.findOne({ _id: id });
            design.name = name;
            design.duration = duration;
            design.title = title;
            await design.save();
            req.flash('alertMessage', 'Success Update Design');
            req.flash('alertStatus', 'success');
            res.redirect(`/admin/design`);
        } catch (error) {
          req.flash('alertMessage', `${error.message}`);
          req.flash('alertStatus', 'danger');
          res.redirect(`/product/show-detail-product/${productId}`);
        }
      },

      deleteDesign: async (req, res) => {
          try {
              const { id } = req.params;
              const design = await Design.findOne({ _id:id })
              console.log(design)
              design.remove()
              req.flash('alertMessage', 'Success Delete Design');
              req.flash('alertStatus', 'success');
              res.redirect('/admin/design');
          } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/design');              
          }
      }
}