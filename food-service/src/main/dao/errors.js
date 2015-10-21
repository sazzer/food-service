const TypedError = require('error/typed');

module.exports = {
    NotFoundError: TypedError({
        type: 'dao.notFound',
        message: 'The requested resource was not found: type={resource}, id={id}',
        resource: null,
        id: null
    })
};
