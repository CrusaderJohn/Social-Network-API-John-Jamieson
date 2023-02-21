const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            min_length: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username : {
            type: String,
            required: true,
        },
        reactions : [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function ()
{
    return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
