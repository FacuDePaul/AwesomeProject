declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_URL?: string;
    TIME_OUT?: number;
  }
  export const Config: NativeConfig;
  export default Config;
}
