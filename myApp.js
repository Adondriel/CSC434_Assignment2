var app = angular.module( 'myApp', [] )
.controller('myController', ['$scope', function($scope) {
	$scope.projectList = {
	"mainProject": 	{
		"title":"Assignment 2",
		"desc":"This Site, tasked with making a site that has a page with HTML tag examples, as well as a page with PHP examples (with source code)",
		"img":"assets/images/HTML5_icon.png",
		"url":"html_examples.html",
		"urlWords":"HTML Examples",
		"url2":"php_examples.php",
		"urlWords2":"PHP Examples"
	},
	"projects": [
    {
		"title":"Assignment 1",
		"summary":"Tasked with making a very simple HTTP Client and Server that worked with each other.",
		"img":"",
		"desc":"Tasked with making a very simple HTTP Client and Server that worked with each other.",
	}
	]
	}

}])
.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|mumble):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);