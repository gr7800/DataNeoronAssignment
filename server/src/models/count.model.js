// productCount.js file
const mongoose = require("mongoose");

const countSchema = new mongoose.Schema(
    {
        addCount: {
            type: Number,
            default: 0,
            required: true,
        },
        updateCount: {
            type: Number,
            default: 0,
            required: true,
        },
        deleteCount: {
            type: Number,
            default: 0,
            required: true,
        },
        totalCount: {
            type: Number,
            default: 0,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Count = mongoose.model('count', countSchema);

module.exports = Count;
