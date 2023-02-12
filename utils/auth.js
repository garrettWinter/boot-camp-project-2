const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/account');
  } else {
    next();
  }
};

module.exports = withAuth;
