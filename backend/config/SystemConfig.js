/**
 * Created by kamal on 1/25/17.
 */
module.exports = {
    getSystemConfig: getSystemConfig
}
    //can take values staging prod dev

var programmingMode = 'dev'

function getSystemConfig() {
    return {
    programmingMode: programmingMode
    };
}