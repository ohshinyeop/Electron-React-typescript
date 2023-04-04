/* eslint-disable @typescript-eslint/no-explicit-any */
type Unsubscribe = () => void;
type Listener = (...args: any[]) => void;

interface AppRuntime {
  send: (channel: string, payload: any) => void;
  subscribe: (channel: string, listener: Listener) => Unsubscribe;
  invoke: (channel: string, payload: any) => Promise<any>;
}

const appRuntime = (window as any).appRuntime as AppRuntime;
export default appRuntime;
