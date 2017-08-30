(function() {
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.plusOne = function(index) {
		$scope.products[index].likes += 1;
	};
  $scope.minusOne = function(index) {
		$scope.products[index].dislikes += 1;
	};
  $scope.products = [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/the-book-of-trees.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'),
    likes: 0,
    dislikes: 0,
    cover: 'img/program-or-be-programmed.jpg' 
  },
    { 
    name: 'XXX', 
    price: -4, 
    pubdate: new Date('2073', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  },
    { 
    name: 'SS', 
    price: 11, 
    pubdate: new Date('7713', '08', '01'), 
    cover: '',
    likes: 0,
    dislikes: 0
  }
];
}]);

})();