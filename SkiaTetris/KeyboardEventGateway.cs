namespace SkiaTetris;

using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

public sealed class KeyboardEventGateway : IDisposable
{
    private static event Action<KeyboardEventArgs> KeyDownInternal;
    public event Action<KeyboardEventArgs> OnKeyDown;

    public KeyboardEventGateway()
    {
        KeyDownInternal += KeyboardEventGateway_KeyDownInternal;
    }

    public void Dispose()
    {
        KeyDownInternal -= KeyboardEventGateway_KeyDownInternal;
    }

    [JSInvokable("GlobalKeyDown")]
    public static Task HandleKeyDown(KeyboardEventArgs e)
    {
        KeyDownInternal?.Invoke(e);
        return Task.CompletedTask;
    }

    private void KeyboardEventGateway_KeyDownInternal(KeyboardEventArgs obj)
    {
        this.OnKeyDown?.Invoke(obj);
    }
}