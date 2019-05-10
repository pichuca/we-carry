module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Por favor, ingresa tu Usuario y Contraseña.');
        res.redirect('/users/login');
    }
};