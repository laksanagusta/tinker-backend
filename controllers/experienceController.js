const fs = require('fs-extra')
const path = require('path')
const Experience = require('../models/Experience')
const User = require('../models/User')

module.exports = {
    addExperience: async (req, res) => {
        const {name, duration, title} = req.body;
        try {
            console.log(req.body)
            const experience = await Experience.create({
                name,
                duration,
                title
            })

            const user = await User.findOne({_id:req.session.user.id})
            user.experienceId.push({ _id:experience._id})
            await user.save()

            req.flash('alertMessage', 'Success Add Experience')
            req.flash('alertStatus', 'success')
            res.redirect(`/admin/experience`);
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/experience`);
        }
    },
    editExperience: async (req, res) => {
        const { id, name, duration, title } = req.body;
        try {
            const experience = await Experience.findOne({ _id: id });
            experience.name = name;
            experience.duration = duration;
            experience.title = title;
            await experience.save();
            req.flash('alertMessage', 'Success Update Experience');
            req.flash('alertStatus', 'success');
            res.redirect(`/admin/experience`);
        } catch (error) {
          req.flash('alertMessage', `${error.message}`);
          req.flash('alertStatus', 'danger');
          res.redirect(`/admin/experience`);
        }
      },

      deleteExperience: async (req, res) => {
          try {
              const { id } = req.params;
              const experience = await Experience.findOne({ _id:id })
              console.log(experience)
              experience.remove()
              req.flash('alertMessage', 'Success Delete Experience');
              req.flash('alertStatus', 'success');
              res.redirect('/admin/experience');
          } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/experience');              
          }
      }
}