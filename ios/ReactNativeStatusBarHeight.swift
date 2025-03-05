import UIKit
import React

@objc(ReactNativeStatusBarHeight)
class ReactNativeStatusBarHeight: NSObject {
  @objc(getStatusBarHeight:withRejecter:)
  func getStatusBarHeight(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    DispatchQueue.main.async {
      if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene {
        let statusBarHeight = windowScene.statusBarManager?.statusBarFrame.height ?? 0
        resolve(statusBarHeight)
      } else {
        reject("STATUS_BAR_ERROR", "Could not get status bar height", nil)
      }
    }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
