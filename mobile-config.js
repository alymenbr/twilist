App.info({
  name: 'Twilist',
  description: 'Teste Twitter API',
  version: '0.0.1'
});

App.icons({

  // Android
  'android_ldpi': 'resources/icons/8s.png',
  'android_mdpi': 'resources/icons/8s.png',
  'android_hdpi': 'resources/icons/8s.png',
  'android_xhdpi': 'resources/icons/8s.png'
});

App.launchScreens({

  // Android
  'android_ldpi_portrait': 'resources/icons/8t.png',
  'android_ldpi_landscape': 'resources/icons/8t.png',
  'android_mdpi_portrait': 'resources/icons/8t.png',
  'android_mdpi_landscape': 'resources/icons/8t.png',
  'android_hdpi_portrait': 'resources/icons/8t.png',
  'android_hdpi_landscape': 'resources/icons/8t.png',
  'android_xhdpi_portrait': 'resources/icons/8t.png',
  'android_xhdpi_landscape': 'resources/icons/8t.png'
});

App.accessRule("*");
App.accessRule('http://*');
App.accessRule('https://*');
App.accessRule('https://*');
App.accessRule('https://api.twitter.com/*');
App.accessRule('https://*.twitter.com/*');
