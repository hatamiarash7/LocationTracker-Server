'use strict';
module.exports = function (app) {
    let location = require('../controllers/locationController');

    app.route('/locations')
        .get(location.list_all_locations)
        .post(location.create_a_location);

    app.route('/locations/:locationId')
        .get(location.read_a_location)
        .put(location.update_a_location)
        .delete(location.delete_a_location);
};