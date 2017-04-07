var commentsApp = angular.module("commentsApp", []);

// var model = 

 commentsApp.controller('commentsCtrl', ['$scope', function($scope) {
  
  $scope.comments = [
              {id: 0, parentId: 0, author: "Alex", email: "alex@i.ua", date: "1459991828823", file: 0, text: "parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem. Quis, veniam! Incidunt quo, qui, molestiae in dolor soluta! Excepturi!", likes: 0,
dislikes: 0},
              {id: 1, parentId: 0, author: "Peter", email: "pki@i.ua", date: "1460111928823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 2, parentId: 1, author: "Sam", email: "samjh@i.ua", date: "1460112038823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 3, parentId: 1, author: "Alex", email: "alex@i.ua", date: "1460112088823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 4, parentId: 3, author: "Marry", email: "gthx@i.ua", date: "1460112288823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 5, parentId: 0, author: "Alex87", email: "hjalex@i.ua", date: "1460112888823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 6, parentId: 0, author: "45Alex", email: "halex@i.ua", date: "1460113188823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 7, parentId: 0, author: "Zohj5x", email: "hjalex@i.ua", date: "1460113888823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 8, parentId: 7, author: "kkkk76", email: "alex@i.ua", date: "1460114388823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 9, parentId: 7, author: "iolx", email: "kuix@i.ua", date: "1460114898823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 10, parentId: 8, author: "pmnk", email: "ljjhx@i.ua", date: "1460115218823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 11, parentId: 10, author: "lklk", email: "hjex@i.ua", date: "1460116418823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 12, parentId: 11, author: "uy", email: "uyuy@i.ua", date: "1460116958823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
          {id: 13, parentId: 0, author: "yurt", email: "jkjx@i.ua", date: "1460117468823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem. Quis, veniam! Incidunt quo, qui, molestiae in dolor soluta! Excepturi!", likes: 0,
dislikes: 0},
              {id: 14, parentId: 0, author: "uyrwf5", email: "mmn@i.ua", date: "1460117878823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 15, parentId: 1, author: "Akoll", email: "kollx@i.ua", date: "1460117928823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 16, parentId: 1, author: "msik", email: "iujm@i.ua", date: "1460118118823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 17, parentId: 3, author: "vbbn", email: "vdex@i.ua", date: "1460118598823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 18, parentId: 0, author: "Arnold", email: "ar55@i.ua", date: "1460119118823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 19, parentId: 0, author: "bob", email: "b77lex@i.ua", date: "1460119858823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 20, parentId: 0, author: "muts", email: "mty@i.ua", date: "1460119978823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 21, parentId: 7, author: "fgg", email: "fgg@i.ua", date: "146012188823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 22, parentId: 7, author: "were", email: "e333@i.ua", date: "1460124588823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 23, parentId: 8, author: "qwer", email: "qewe@i.ua", date: "1460128988823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 24, parentId: 10, author: "eww", email: "w3d@i.ua", date: "1460129788823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 25, parentId: 11, author: "eww222", email: "wee22x@i.ua", date: "1460129858823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
            {id: 26, parentId: 0, author: "cxe", email: "ede@i.ua", date: "1460129898823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem. Quis, veniam! Incidunt quo, qui, molestiae in dolor soluta! Excepturi!", likes: 0,
dislikes: 0},
              {id: 27, parentId: 0, author: "dfvc", email: "rfdfv@i.ua", date: "1460129988236", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 28, parentId: 1, author: "rew", email: "r3wee@i.ua", date: "1460142088823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 29, parentId: 1, author: "cedre5", email: "4545h@i.ua", date: "1460148988823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 30, parentId: 3, author: "6h6h", email: "hhty@i.ua", date: "1460152088823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 31, parentId: 0, author: "cass", email: "cdwex@i.ua", date: "1460158088823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 32, parentId: 0, author: "vfurr", email: "furr@i.ua", date: "1460159288823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 33, parentId: 0, author: "vzuer", email: "zuer@i.ua", date: "1460165778823", file: 0, text: "Parent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 34, parentId: 7, author: "noit8", email: "itten@i.ua", date: "1460169088823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 35, parentId: 7, author: "kkj", email: "jj@i.ua", date: "1460189288823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 36, parentId: 8, author: "dea", email: "addfdgf@i.ua", date: "1460191188823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 37, parentId: 10, author: "gfg", email: "ggx@i.ua", date: "1460194788823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
              {id: 38, parentId: 11, author: "gggr5", email: "yty@i.ua", date: "1460199888823", file: 0, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam natus quia alias praesentium blanditiis veniam voluptas beatae totam nemo rem.", likes: 0,
dislikes: 0},
            ];
 
  //   ua: navigator.userAgent;

  // };
$scope.plusOne = function(index) {
      $scope.products[index].likes += 1;
    };  
  $scope.minusOne = function(index) {
      $scope.products[index].dislikes += 1;
    };  
  $scope.plusOne = function(index) {
      $scope.comments[index].likes += 1;
    };

  $scope.minusOne = function(index) {
      $scope.comments[index].dislikes += 1;
    };  

  $scope.captcha = '';
  $scope.generateCaptcha = function () {
    
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P', 'Q','R','S','T','U','V','W', 'X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var i;
    for (i = 0; i < 5; i++) {
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
      var e = alpha[Math.floor(Math.random() * alpha.length)];
      var f = alpha[Math.floor(Math.random() * alpha.length)];
    }

    var g = Math.floor((Math.random() * 10)) + '';
    var h = Math.floor((Math.random() * 10)) + '';
    var j = Math.floor((Math.random() * 10)) + '';
    var k = Math.floor((Math.random() * 10)) + '';
    $scope.captcha = a + b + c + d + e + f + g + h + j + k;
    return $scope.capture;
};

  $scope.generateCaptcha();
  $scope.checkCaptcha;
 $scope.check = function () {
    if ($scope.captchaText.split(' ').join('') == $scope.captcha.split(' ').join('')) {
      return $scope.checkCaptcha = true;
    } else {        
      $scope.generateCaptcha();
      return $scope.checkCaptcha = false;
      
   }
};

  $scope.propertyName = 'date';
  $scope.reverse = true;
  
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

}]);

commentsApp.filter ('startFrom', function () {
  return function (input, start) {
    start = +start;
    return input.slice(start);
  }
});

commentsApp.controller('paginationCtrl', function($scope){
  $scope.currentPage = 0;
  $scope.itemsPerPage = 25;
  $scope.items = $scope.comments;
  $scope.firstPage = function() {
    return $scope.currentPage == 0;
  };
  $scope.lastPage = function() {
    var lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
    return $scope.currentPage == lastPageNum;
  };
  $scope.numberOfPages = function(){
    return Math.ceil($scope.items.length / $scope.itemsPerPage);
  };
  $scope.startingItem = function() {
    return $scope.currentPage * $scope.itemsPerPage;
  };
  $scope.pageBack = function() {
    $scope.currentPage = $scope.currentPage - 1;
  };
  $scope.pageForward = function() {
    $scope.currentPage = $scope.currentPage + 1;
  };
});

// commentsApp.directive('commentList', [
//   function () {
//     return {
//       restrict: 'E',
//       scope: {
//         contentId: '=',
//         contentTitle: '='
//       },
//       templateUrl: 'comments-list.html',
//       controller: 'CommentsCtrl',
//       controllerAs: 'comments'
//     };
//   }]);

//   commentsApp.service('CommentsService', ['$http', function($http) {
//   this.getComments = function(id) {
//     return $http.get('url')
//       .success(function(data) {
//         angular.forEach(data.contentlets, function(item) {
//           item.datePublished = new Date(item.datePublished);
//         });
//       })
//       .error(function(data, status) {
//         console.log('ERROR: ' + status + '. We can\'t get the comments right now, please try again later');
//       });
//   };
// }]);

//   commentsApp.controller('commentsCtrl', ['$scope', 'CommentsService', function($scope, CommentsService) {
//     var commentIdCounter
//     var commentTest = {"id":"0", }
//     CommentsService.getComments($scope.contentId)
//       .then(function(response) {
//         $scope.comments = response.data || ;
//       });
//   }]);

// var model = [{ name: "HTML, CSS", lector: "Max Veber", duration: "8 hours", intro: "HTML is the standard markup language for creating Web pages. CSS describes how HTML elements are to be displayed on screen, paper, or in other media" },
// 				{ name: "JavaScript Essential", lector: "Peter Shim", duration: "10 hours", intro: "JavaScript is the programming language of HTML and the Web."},
// 				{ name: "JavaScript Advanced", lector: "Peter Shim", duration: "12 hours", intro: "With the HTML DOM, JavaScript can access and change all the elements of an HTML document."},
// 				{ name: "HTML5 &amp; CSS3", lector: "Max Veber", duration: "4 hours", intro: "HTML5 is supported in all modern browsers. CSS3 is the latest standard for CSS. CSS3 is completely backwards-compatible with earlier versions of CSS. This section teaches you about the new features in CSS3!" },
// 				{ name: "AngularJS", lector: "Peter Shimr", duration: "10 hours", intro: "AngularJS is a JavaScript framework. It can be added to an HTML page with a <script> tag. AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions." }];
					   
// 		courseListApp.controller("courseListCtrl", function ($scope) {

// 			$scope.courses = model;
// 		});
// commentsApp

             // <body onload="generateCaptcha()">
 


 


 
// commentsApp.directive('commentForm', [
//   function () {
//     return {
//       restrict: 'E',
//       templateUrl: 'comments-form.html',
//       controller: 'CommentsFormCtrl',
//       controllerAs: 'commentsForm'
//     };
//   }]);
  