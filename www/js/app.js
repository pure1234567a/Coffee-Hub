// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module(
  'starter',  
  ['ionic', 
  'starter.controllers',
  'authen.controller',
  'home.controller',
  'profile.controller',
  'news&promotion.controller',
  'news.controller',
  'promotion.controller',
  'shopmanagement.controller',
  'calculate.controller',
  'qr.controller',
  'receipt.controller',
  'buycc.controller',
  'sellcc.controller',
  'addmenu.controller',
  'cupcoins.controller',
  'overview.controller',
  'signinwithqr.controller',
  'signintomanage.controller'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/default/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/default/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/default/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/default/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  


  .state('signin', {
    url: '/signin',
        templateUrl: 'templates/signin.html',
        controller: 'authenCtrl'
      }
      )

      .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
      .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        }
      }
    })
      .state('app.news&promotion', {
      url: '/news&promotion',
      views: {
        'menuContent': {
          templateUrl: 'templates/news&promotion.html',
          controller: 'news&promotionCtrl'
        }
      }
    })
     .state('app.news', {
      url: '/news',
      views: {
        'menuContent': {
          templateUrl: 'templates/news.html',
          controller: 'newsCtrl'
        }
      }
    })
    .state('app.promotion', {
      url: '/promotion',
      views: {
        'menuContent': {
          templateUrl: 'templates/promotion.html',
          controller: 'promotionCtrl'
        }
      }
    })
     .state('app.shopmanagement', {
      url: '/shopmanagement',
      views: {
        'menuContent': {
          templateUrl: 'templates/shopmanagement.html',
          controller: 'shopmanagementCtrl'
        }
      }
    })
    .state('app.calculate', {
      url: '/calculate',
      views: {
        'menuContent': {
          templateUrl: 'templates/calculate.html',
          controller: 'calculateCtrl'
        }
      }
    })
     .state('app.qrscan', {
      url: '/qrscan',
      views: {
        'menuContent': {
          templateUrl: 'templates/qrscan.html',
          controller: 'qrscanCtrl'
        }
      }
    })
    .state('app.receipt', {
      url: '/receipt',
      views: {
        'menuContent': {
          templateUrl: 'templates/receipt.html',
          controller: 'receiptCtrl'
        }
      }
    })
    .state('app.buycc', {
      url: '/buycc',
      views: {
        'menuContent': {
          templateUrl: 'templates/buycc.html',
          controller: 'buyccCtrl'
        }
      }
    })
    .state('app.sellcc', {
      url: '/sellcc',
      views: {
        'menuContent': {
          templateUrl: 'templates/sellcc.html',
          controller: 'sellccCtrl'
        }
      }
    })
    .state('app.addmenu', {
      url: '/addmenu',
      views: {
        'menuContent': {
          templateUrl: 'templates/addmenu.html',
          controller: 'addmenuCtrl'
        }
      }
    })
    .state('app.cupcoins', {
      url: '/cupcoins',
      views: {
        'menuContent': {
          templateUrl: 'templates/cupcoins.html',
          controller: 'cupcoinsCtrl'
        }
      }
    })
    .state('app.overview', {
      url: '/overview',
      views: {
        'menuContent': {
          templateUrl: 'templates/overview.html',
          controller: 'overviewCtrl'
        }
      }
    })
    .state('app.signinwithqr', {
      url: '/signinwithqr',
      views: {
        'menuContent': {
          templateUrl: 'templates/signinwithqr.html',
          controller: 'signinwithqrCtrl'
        }
      }
    })
    .state('app.signintomanage', {
      url: '/signintomanage',
      views: {
        'menuContent': {
          templateUrl: 'templates/signintomanage.html',
          controller: 'signintomanageCtrl'
        }
      }
    })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/signin');
});
