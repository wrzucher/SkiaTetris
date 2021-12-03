declare module DotNet {
    /**
     * Invokes the specified .NET public method synchronously. Not all hosting scenarios support
     * synchronous invocation, so if possible use invokeMethodAsync instead.
     *
     * @param assemblyName The short name (without key/version or .dll extension) of the .NET assembly containing the method.
     * @param methodIdentifier The identifier of the method to invoke. The method must have a [JSInvokable] attribute specifying this identifier.
     * @param args Arguments to pass to the method, each of which must be JSON-serializable.
     * @returns The result of the operation.
     */
    function invokeMethod<T>(assemblyName: string, methodIdentifier: string, ...args: any[]): T;
    /**
     * Invokes the specified .NET public method asynchronously.
     *
     * @param assemblyName The short name (without key/version or .dll extension) of the .NET assembly containing the method.
     * @param methodIdentifier The identifier of the method to invoke. The method must have a [JSInvokable] attribute specifying this identifier.
     * @param args Arguments to pass to the method, each of which must be JSON-serializable.
     * @returns A promise representing the result of the operation.
     */
    function invokeMethodAsync<T>(assemblyName: string, methodIdentifier: string, ...args: any[]): Promise<T>;
    /**
     * Represents the .NET instance passed by reference to JavaScript.
     */
    interface DotNetObject {
        /**
        * Invokes the specified .NET instance public method synchronously. Not all hosting scenarios support
        * synchronous invocation, so if possible use invokeMethodAsync instead.
        *
        * @param methodIdentifier The identifier of the method to invoke. The method must have a [JSInvokable] attribute specifying this identifier.
        * @param args Arguments to pass to the method, each of which must be JSON-serializable.
        * @returns The result of the operation.
        */
        invokeMethod<T>(methodIdentifier: string, ...args: any[]): T;
        /**
         * Invokes the specified .NET instance public method asynchronously.
         *
         * @param methodIdentifier The identifier of the method to invoke. The method must have a [JSInvokable] attribute specifying this identifier.
         * @param args Arguments to pass to the method, each of which must be JSON-serializable.
         * @returns A promise representing the result of the operation.
         */
        invokeMethodAsync<T>(methodIdentifier: string, ...args: any[]): Promise<T>;
    }
}

window.addEventListener("keydown", function (e) {
    DotNet.invokeMethodAsync('SkiaTetris', 'GlobalKeyDown', serializeEvent(e))
});

var serializeEvent = function (e: KeyboardEvent) {
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