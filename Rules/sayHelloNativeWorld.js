/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function sayHelloNativeWorld(clientAPI) {
    var _iOSHelloNativeWorld = HelloNativeWorld.new();
    alert(_iOSHelloNativeWorld.whoAreYou());
}
