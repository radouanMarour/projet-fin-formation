export const parseDate = (tdate) => {
    var system_date = new Date(Date.parse(tdate));
    var user_date = new Date();
    if (K.ie) {
        system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
    }
    var diff = Math.floor((user_date - system_date) / 1000);
    if (diff <= 1) { return "à l'instant"; }
    if (diff < 20) { return "il y a " + diff + " secondes"; }
    if (diff < 40) { return "il y a une minute"; }
    if (diff < 60) { return "il y a moins d'une minute"; }
    if (diff <= 90) { return "il y a une minute"; }
    if (diff <= 3540) { return "il y a " + Math.round(diff / 60) + " minutes"; }
    if (diff <= 5400) { return "il y a 1 heure"; }
    if (diff <= 86400) { return "il y a " + Math.round(diff / 3600) + " heures"; }
    if (diff <= 129600) { return "il y a 1 jour"; }
    if (diff < 604800) { return "il y a " + Math.round(diff / 86400) + " jours"; }
    if (diff <= 777600) { return "il y a 1 semaine"; }
    return system_date;
}

// from http://widgets.twimg.com/j/1/widget.js
var K = function () {
    var a = navigator.userAgent;
    return {
        ie: a.match(/MSIE\s([^;]*)/)
    }
}();