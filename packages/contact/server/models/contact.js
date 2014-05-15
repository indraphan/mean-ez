'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Contact Schema
 */
var ContactSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	phone: {
		type: Number
	},
	email: {
		type: String
	},
	facebook: {
		type: String
	},
	twitter: {
		type: String
	},
	skype: {
		type: String
	},
});

/**
 * Validations
 */

/**
 * Statics
 */

mongoose.model('Contact', ContactSchema);
