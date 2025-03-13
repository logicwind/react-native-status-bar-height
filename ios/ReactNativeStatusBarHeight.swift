import UIKit
import React

@objc(ReactNativeStatusBarHeight)
class ReactNativeStatusBarHeight: NSObject {
  
  @objc
  func constantsToExport() -> [AnyHashable: Any] {
    var statusBarHeight: CGFloat = 0
    if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene {
      statusBarHeight = windowScene.statusBarManager?.statusBarFrame.height ?? 0
    }
    return ["STATUS_BAR_HEIGHT": statusBarHeight]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
