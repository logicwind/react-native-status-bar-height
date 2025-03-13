#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ReactNativeStatusBarHeight, NSObject)

RCT_EXTERN_METHOD(constantsToExport)

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
