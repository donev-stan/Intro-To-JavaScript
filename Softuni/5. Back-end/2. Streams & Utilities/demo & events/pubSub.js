const events = {};

module.exports = {

    publish: (eventName, param) => {
        if (events.hasOwnProperty(eventName)) {
            events[eventName].forEach(callback => {
                callback(param);
            });
        }
    },

    subscribe: (eventName, callback) => {
        if (events.hasOwnProperty(eventName) == false) {
            events[eventName] = [];
        }

        events[eventName].push(callback);
    }
};