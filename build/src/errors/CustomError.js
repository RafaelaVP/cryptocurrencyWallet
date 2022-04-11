"use strict";
module.exports = class CustomError extends Error {
    constructor(attrs = {}) {
        super("Custom Error");
        this.attrs = attrs;
        if (this.attrs.params) {
            this.attrs.params = this.attrs.params.map(el => {
                if (typeof el.key !== "string") {
                    throw new TypeError("Custom Error creation: type of param key must be string!");
                }
                return {
                    key: el.key,
                    value: `${el.value}`
                };
            });
        }
        if (typeof this.attrs.mainMessage !== "string") {
            throw new TypeError("Custom Error creation: type of mainMessage must be string!");
        }
        if (typeof this.attrs.code !== "string") {
            throw new TypeError("Custom Error creation: type of code must be string!");
        }
    }
    formatForGraphql() {
        return {
            message: this.attrs.mainMessage,
            code: this.attrs.code,
            extentions: {
                params: this.attrs.params
            }
        };
    }
};
