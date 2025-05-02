import UIKit
import React

@objc(ReactNativeStatusBarHeight)
class ReactNativeStatusBarHeight: NSObject {
  
  @objc
  func constantsToExport() -> [AnyHashable: Any] {
    var statusBarHeight: CGFloat = 0
    var bottomSafeArea: CGFloat = 0

    if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
       let window = windowScene.windows.first {
      statusBarHeight = window.windowScene?.statusBarManager?.statusBarFrame.height ?? 0
      bottomSafeArea = window.safeAreaInsets.bottom
    }

    return [
      "STATUS_BAR_HEIGHT": statusBarHeight,
      "BOTTOM_SAFE_AREA": bottomSafeArea
    ]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
