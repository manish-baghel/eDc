/**
 * Created by kamal on 1/25/17.
 */
var systemConfig = require('../config/SystemConfig')
module.exports = {
    printTerminal : printTerminal
}
function printTerminal(tag, value) {
    var programmingMode = systemConfig.getSystemConfig().programmingMode;
    switch (programmingMode){
        case 'dev':
            console.log(tag,value);
            break;
        case 'staging':
            console.log(tag, value);
            break;
        case 'prod':
            break;
    }
}