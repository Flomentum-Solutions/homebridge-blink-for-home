const { setHap } = require('./homebridge/hap')
const { HomebridgeBlink } = require('./homebridge')

// Blink Security Platform Plugin for HomeBridge (https://github.com/Flomentum-Solutions/homebridge-blink-for-home-new)
//
// Remember to add platform to config.json. Example:
// "platforms": [
//     {
//         "platform": "BlinkForHome",
//         "name": "Blink",
//         "username": "me@example.com",
//         "password": "PASSWORD",
//         "pin": "01234",
//         "ffmpegPath": "/usr/bin/ffmpeg"
//     }
// ]

module.exports = function (homebridge) {
    setHap(homebridge.hap)
    homebridge.registerPlatform(
        HomebridgeBlink.PLUGIN_NAME,
        HomebridgeBlink.PLATFORM_NAME,
        HomebridgeBlink,
        true
    )

    return homebridge
}
