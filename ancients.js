const request = require('request-promise');
const tableify = require('tableify');
const moment = require('moment');
const {ANCIENT_ATTRIBUTES, ANCIENTS_URL, END_OF_ERA_FORMAT} = require('./consts');

function capitalize(ancients) {
    return ancients.map((ancient) => {
        let capitalized = {};
        Object.keys(ancient).map((key) => {
            const val = ancient[key];
            if (typeof val === 'string') {
                capitalized[key] = val.toUpperCase();
            } else {
                capitalized[key] = val;
            }
        });
        return capitalized;
    });
}

function parseDates(ancients) {
    return ancients.map((ancient) => {
        ancient[ANCIENT_ATTRIBUTES.END_OF_ERA] = moment(ancient[ANCIENT_ATTRIBUTES.END_OF_ERA])
            .format(END_OF_ERA_FORMAT);
        return ancient;
    })
}

module.exports = {
    fetchAncients: async function () {
        try {
            return request.get({url: ANCIENTS_URL, json: true});
        } catch (e) { console.log('unable to fetch ancients:', e); }
    },
    convertAncientsToHtml: function (ancients) {
        return tableify(parseDates(capitalize(ancients)));
    }
};
1