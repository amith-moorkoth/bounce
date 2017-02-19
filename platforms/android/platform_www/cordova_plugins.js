cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-canvas-gamepad.CDVGamepad",
        "file": "plugins/cordova-plugin-canvas-gamepad/www/CDVGamepad.js",
        "pluginId": "cordova-plugin-canvas-gamepad",
        "clobbers": [
            "CDVGamepad"
        ]
    },
    {
        "id": "cordova-plugin-device-motion.Acceleration",
        "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "id": "cordova-plugin-device-motion.accelerometer",
        "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "navigator.accelerometer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-canvas-gamepad": "0.1.1",
    "cordova-plugin-device-motion": "1.2.3",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-crosswalk-webview": "2.3.0"
};
// BOTTOM OF METADATA
});