'use strict';

var contact = require('../controllers/contact');

// The Package is past automatically as first parameter
module.exports = function(Contact, app, auth, database) {

	app.route('/contacts')
		.get(contact.index)
		.post(contact.addContact);
		
	app.route('/contacts/:id')
		.get(contact.findById)
		.put(contact.updateContact)
		.delete(contact.deleteContact);
		
};


