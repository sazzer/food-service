const TypedError = require('error/typed');

module.exports = {
    MismatchedTypeError: TypedError({
        type: 'units.mismatchedType',
        message: 'Can only convert between units of the same type',
        from: null,
        to: null
    })
};
