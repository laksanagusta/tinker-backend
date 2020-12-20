const fs = require('fs-extra')
const path = require('path')
const SocialMedia = require('../models/SocialMedia')
const User = require('../models/User')

module.exports = {
    addSocialMedia: async (req, res) => {
        try {
            const {name, code, link} = req.body;
            const userId = req.session.user.id;

            const socialMedia = await SocialMedia.create({
                name,
                code,
                link,
                imageUrl: `images/${req.file.filename}`
            })


            const user = await User.findOne({_id:userId})
            user.socialMediaId.push({ _id:socialMedia._id})
            await user.save()

            req.flash('alertMessage', 'Success Add SocialMedia')
            req.flash('alertStatus', 'success')
            res.redirect(`/admin/socialMedia`);
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect(`/admin/socialMedia`);
        }
    },
    editSocialMedia: async (req, res) => {
        const { id, name, code, link } = req.body;
        try {
          const socialMedia = await SocialMedia.findOne({ _id: id });
          if (req.file == undefined) {
            socialMedia.name = name;
            socialMedia.code = code;
            socialMedia.link = link;
            await socialMedia.save();
            req.flash('alertMessage', 'Success Update SocialMedia');
            req.flash('alertStatus', 'success');
            res.redirect(`/admin/socialMedia`);
          } else {
            await fs.unlink(path.join(`public/${socialMedia.imageUrl}`));
            socialMedia.name = name;
            socialMedia.code = code;
            socialMedia.link = link;
            socialMedia.imageUrl = `images/${req.file.filename}`
            await socialMedia.save();
            req.flash('alertMessage', 'Success Update SocialMedia');
            req.flash('alertStatus', 'success');
            res.redirect(`/admin/socialMedia`);
          }
        } catch (error) {
          req.flash('alertMessage', `${error.message}`);
          req.flash('alertStatus', 'danger');
          res.redirect(`/admin/socialMedia`);
        }
      },

      deleteSocialMedia: async (req, res) => {
        try {
            const { id } = req.params;
            const socialMedia = await SocialMedia.findOne({_id:id});
            await fs.unlink(path.join(`public/${socialMedia.imageUrl}`));
            await socialMedia.remove();
            req.flash('alertMessage', 'Success Delete SocialMedia');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/socialMedia');
        } catch (error) {
          req.flash('alertMessage', `${error.message}`);
          req.flash('alertStatus', 'danger');
          res.redirect('/admin/socialMedia');
        }
      },
}