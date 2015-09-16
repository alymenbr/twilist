App.info({
  name: 'ZapBus',
  description: 'Inovapps2015',
  version: '0.0.1'
});

App.icons({

  // Android
  'android_ldpi': 'resources/icons/8s.jpg',
  'android_mdpi': 'resources/icons/8s.jpg',
  'android_hdpi': 'resources/icons/8s.jpg',
  'android_xhdpi': 'resources/icons/8s.jpg'
});

App.launchScreens({

  // Android
  'android_ldpi_portrait': 'resources/icons/8t.jpg',
  'android_ldpi_landscape': 'resources/icons/8t.jpg',
  'android_mdpi_portrait': 'resources/icons/8t.jpg',
  'android_mdpi_landscape': 'resources/icons/8t.jpg',
  'android_hdpi_portrait': 'resources/icons/8t.jpg',
  'android_hdpi_landscape': 'resources/icons/8t.jpg',
  'android_xhdpi_portrait': 'resources/icons/8t.jpg',
  'android_xhdpi_landscape': 'resources/icons/8t.jpg'
});

App.accessRule(
    "https://maps.google.com/*",
    {
        launchExternal: false
    }
);