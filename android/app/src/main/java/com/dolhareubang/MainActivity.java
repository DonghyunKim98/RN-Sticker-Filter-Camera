package com.dolhareubang;
import com.reactnativecommunity.cameraroll.CameraRollPackage;
import com.facebook.react.ReactActivity;
import com.facebook.react.PackageList;
import com.facebook.react.ReactPackage;

import java.util.List;

public class MainActivity extends ReactActivity {
  
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "dolhareubang";
  }
  
  protected List<ReactPackage> getPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();
    // Packages that cannot be autolinked yet can be added manually here, for example:
    // packages.add(new MyReactNativePackage());
    packages.add(new CameraRollPackage()); // <-- Add this line with your package name.
    return packages;
  }
}
