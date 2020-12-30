const fs = require('fs-extra')
const path = require('path')
const Design = require('../models/Design')
const User = require('../models/User')

module.exports = {
    addDesign: async (req, res) => {
        const {title, duration, description, client, tag, moreDescription} = req.body;
        try {
            const design = await Design.create({
                duration,
                title,
                imageUrl : `${req.imagePath}`,
                description,
                client,
                tag,
                moreDescription
            })

            // const tools = {
            //     name: name,
            //     icon: icon,
            // }
        
            // design.tools.push(tools)
            // await design.save()

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
        const { title, duration, description, client, tag, moreDescription } = req.body;
        try {
            const design = await Design.findOne({ _id: id });
            if (req.imagePath === undefined) {
                design.title = title;
                design.duration = duration;
                design.description = description;
                design.tag = tag;
                design.client = client;
                design.moreDescription = moreDescription;
                await design.save();
            }
            else{
                design.title = title;
                design.duration = duration;
                design.description = description;
                design.tag = tag;
                design.client = client;
                design.moreDescription = moreDescription;
                design.imageUrl = req.imagePath;
                await design.save();
            }
            req.flash('alertMessage', 'Success Update Design');
            req.flash('alertStatus', 'success');
            res.redirect(`/admin/design`);
        } catch (error) {
          req.flash('alertMessage', `${error.message}`);
          req.flash('alertStatus', 'danger');
          res.redirect(`/admin/design`);
        }
      },

      deleteDesign: async (req, res) => {
          try {
              const { id } = req.params;
              const design = await Design.findOne({ _id:id })
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