const fs = require('fs-extra')
const path = require('path')
const Education = require('../models/Education')
const User = require('../models/User')

module.exports = {
    addEducation: async (req, res) => {
        const {name, duration, title} = req.body;
        try {
            console.log(req.body)
            const education = await Education.create({
                name,
                duration,
                title
            })

            const user = await User.findOne({_id:req.session.user.id})
            user.educationId.push({ _id:education._id})
            await user.save()

            req.flash('alertMessage', 'Success Add Education')
            req.flash('alertStatus', 'success')
            res.redirect(`/admin/education`);
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/education`);
        }
    },
    editEducation: async (req, res) => {
        const { id, name, duration } = req.body;
        try {
            const education = await Education.findOne({ _id: id });
            education.name = name;
            education.duration = duration;
            education.title = title;
            await education.save();
            req.flash('alertMessage', 'Success Update Education');
            req.flash('alertStatus', 'success');
            res.redirect(`/admin/education`);
        } catch (error) {
          req.flash('alertMessage', `${error.message}`);
          req.flash('alertStatus', 'danger');
          res.redirect(`/product/show-detail-product/${productId}`);
        }
      },

      deleteEducation: async (req, res) => {
          try {
              const { id } = req.params;
              const education = await Education.findOne({ _id:id })
              console.log(education)
              education.remove()
              req.flash('alertMessage', 'Success Delete Education');
              req.flash('alertStatus', 'success');
              res.redirect('/admin/education');
          } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/education');              
          }
      }
}