const Ajv = require('ajv');

const ajv = new Ajv();

module.exports = {
    validateAuth: ajv.compile({
        type: 'string',
    }),

    validateNotifyObjectiveComplete: ajv.compile({
        type: 'object',
        properties: {
            team: {
                type: 'string',
                pattern: '^(blue|red)$',
            },
            id: {
                type: 'number',
                minimum: 0,
            },
        },
        required: ['team', 'id'],
    }),

    validateSetObjectiveStatus: ajv.compile({
        type: 'object',
        properties: {
            team: {
                type: 'string',
                pattern: '^(blue|red)$',
            },
            id: {
                type: 'number',
                minimum: 0,
            },
            status: {
                type: 'string',
                pattern: '^(incomplete|pending|complete)$',
            },
        },
        required: ['team', 'id', 'status'],
    }),

    validateAddStrike: ajv.compile({
        type: 'string',
        pattern: '^(blue|red)$',
    }),

    validateOp: ajv.compile({
        type: 'object',
        properties: {
            t: {
                type: 'string',
            },
            r: {
                type: 'array',
                items: {
                    type: 'number',
                    minimum: 0,
                    multipleOf: 1,
                },
                minItems: 2,
                maxItems: 4,
                additionalItems: false,
            },
        },
        required: ['r'],
        additionalProperties: false,
    }),
};
