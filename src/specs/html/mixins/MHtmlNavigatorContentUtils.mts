export interface MHtmlNavigatorContentUtils {
  registerProtocolHandler(scheme: string, url: string): void;
  unregisterProtocolHandler(scheme: string, url: string): void;
}
