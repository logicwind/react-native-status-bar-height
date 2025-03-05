#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ReactNativeStatusBarHeight, NSObject)

RCT_EXTERN_METHOD(getStatusBarHeight:(RCTPromiseResolveBlock)resolve withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
