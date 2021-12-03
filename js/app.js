window.addEventListener("keydown", function (e) {
    DotNet.invokeMethodAsync('SkiaTetris', 'GlobalKeyDown', serializeEvent(e));
});
var serializeEvent = function (e) {
    if (e) {
        var o = {
            altKey: e.altKey,
            code: e.code,
            key: e.key,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey
        };
        return o;
    }
};
//# sourceMappingURL=app.js.map