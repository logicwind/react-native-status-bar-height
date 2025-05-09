package com.logicwind.reactnativestatusbarheight

import android.app.Activity
import android.os.Build
import android.view.WindowInsets
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

class ReactNativeStatusBarHeightModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun getConstants(): Map<String, Any> {
    val constants = mutableMapOf<String, Any>()

    val activity: Activity? = currentActivity
    var bottomInset = 0

    if (activity != null) {
      val rootView = activity.window.decorView.rootView
      val insets: WindowInsets? = rootView.rootWindowInsets

      if (insets != null) {
        bottomInset = when {
          Build.VERSION.SDK_INT >= Build.VERSION_CODES.R -> {
            insets.getInsets(WindowInsets.Type.systemBars()).bottom
          }
          Build.VERSION.SDK_INT >= Build.VERSION_CODES.M -> {
            insets.systemWindowInsetBottom
          }
          else -> 0
        }
      }
    }

    val density = reactApplicationContext.resources.displayMetrics.density
    val bottomInsetDp = bottomInset / density

    constants["BOTTOM_SAFE_AREA"] = bottomInsetDp

    return constants
  }

  companion object {
    const val NAME = "ReactNativeStatusBarHeight"
  }
}
