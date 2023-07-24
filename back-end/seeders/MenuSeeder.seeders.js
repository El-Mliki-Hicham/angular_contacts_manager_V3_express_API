
var express = require('express');
const MenuModule = require('../models/menu.model');
var router = express.Router();


router.post('/seed-menu', function (req, res) {

    var menuItems = [
        {
            displayName: 'Dashboard',
            iconName: 'layout-dashboard',
            route: '/dashboard',
            displaying: true,
            role: "user"
        },
        {
            displayName: 'Contacts manager',
            iconName: 'icon-contact',
            route: '/contacts',
            displaying: true,
            role: "admin"
        },

        {
            displayName: 'Badge',
            iconName: 'rosette',
            route: '/ui-components/badge',
            displaying: true,
            role: "admin"
        },
        {
            displayName: 'Chips',
            iconName: 'poker-chip',
            route: '/ui-components/chips',
            displaying: true,
            role: "admin"
        },
        {
            displayName: 'Lists',
            iconName: 'list',
            route: '/ui-components/lists',
            displaying: true,
            role: "admin"
        },
        {
            displayName: 'Menu',
            iconName: 'layout-navbar-expand',
            route: '/ui-components/menu',
            displaying: true,
            role: "admin"
        },
        {
            displayName: 'Tooltips',
            iconName: 'tooltip',
            route: '/ui-components/tooltips',
            displaying: true,
            role: "admin"
        },
        {
            displayName: 'Login',
            iconName: 'lock',
            route: '/authentication/login',
            displaying: true,
            role: "admin"
        },
        {
            displayName: 'Register',
            iconName: 'user-plus',
            route: '/authentication/register',
            displaying: true,
            role: "admin"
        },
        {
            displayName: 'Icons',
            iconName: 'mood-smile',
            route: '/extra/icons',
            displaying: true,
            role: "admin"
        },
        {
            displayName: 'Sample Page',
            iconName: 'aperture',
            route: '/extra/sample-page',
            displaying: true,
            role: "admin"
        },
    ]
    const menuModules = menuItems.map(item => new MenuModule(item));

    // Save each menu module to the database
    Promise.all(menuModules.map(menuModule => menuModule.save()))
      .then(savedModules => {
        res.status(200).json({ status: true, message: 'Seeders success', results: savedModules });
      })
      .catch(err => {
        res.status(500).json({ status: false, message: err.message, code: err.code, key: err.keyValue });
      });
  });
module.exports = router;