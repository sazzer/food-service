module.exports = [
    {
        path: '/test1',
        method: 'GET',
        handler: function (request, reply) {
            reply('hello');
        }
    },
    {
        path: '/test2',
        method: 'GET',
        handler: function (request, reply) {
            reply('hello');
        }
    }
]
