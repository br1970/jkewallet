cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ibm.mqa/js/tracekit.js",
        "id": "com.ibm.mqa.TraceKit",
        "clobbers": [
            "MQATrace"
        ]
    },
    {
        "file": "plugins/com.ibm.mqa/js/MQA.js",
        "id": "com.ibm.mqa.MQA",
        "clobbers": [
            "MQA"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.ibm.mqa": "3.0.12"
}
// BOTTOM OF METADATA
});