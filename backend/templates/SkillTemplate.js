/**
 * Created by kamal on 1/25/17.
 */
var awsConfig = require('../config/AwsConfig');
var imageConfig = require('../config/ImageUrls');

module.exports = {
    getLogicalSkill: getLogicalSkill,
    getOOpsSkill: getOopsSkill,
    getProgrammingFundamentalsSkill: getProgrammingFundamentalsSkill,
    getDataStructureSkill: getDataStructureSkill
};

function getLogicalSkill() {

    var skill1 = {
        name: 'Logical Thinking',
        description: 'Programming is nothing but writing down your organized thoughts in a predefined format. If you have logical thinking abilities, you can be a good programmer',
        logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill1
    };

    return skill1;
}
function getProgrammingFundamentalsSkill() {

    var skill2 = {
        name: 'Programming Fundamentals',
        description: 'The fundamental concepts of programming are same in most programming languages. This is the launchpad to choose your programming path.',
        logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill2
    };

    return skill2;
}

function getOopsSkill() {

    var skill3 = {
        name: 'OOPs Concepts',
        description: 'OOPS concepts make the code error free, long lasting and reusable. This greatly increases quality of code.',
        logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill3
    };

    return skill3;
}
function getDataStructureSkill() {

    var skill4 = {
        name: 'Data Structures',
        description: "Data Structure is how your data is stored or arranged in disk or memory. Efficient data structures improves efficiency of the programs. Thus contributing to quality code.",
        logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill4
    };

    return skill4;
}
