const SCOPE = require('constants/scope')



/**
 * The initial state of a picker.
 *
 * TODO: Add type validation and required state properties.
 *
 * @type {Object}
 */
const INITIAL = {
  disabled : null,
  scope    : SCOPE.DAYS,
  selected : null,
  template : 'd mmmm, yyyy',
  today    : null,
  view     : null,
}



/**
 * The keys of the state.
 * @type {Object(String)}
 */
const KEYS = Object.keys(INITIAL)



module.exports = {
  INITIAL,
  KEYS,
}