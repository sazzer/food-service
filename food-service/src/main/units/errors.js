const TypedError = require('error/typed');

module.exports = {
    MismatchedTypeError: TypedError({
        type: 'units.mismatchedType',
        message: 'Can only convert between units of the same type',
        from: null,
        to: null
    }),
    NotFoundError: TypedError({
        type: 'units.notFound',
        message: 'No Unit with the ID "{id}" was found',
        id: null
    })
};
