// Initialize your app
var myApp = new Framework7({
    // animateNavBackIcon:true,//ios only
	
    swipePanel: 'left',
	pushstate: true, // for h/w back button support MAYBE! KOSTYL
	swipePanelActiveArea: 50,
	material: true, //enable Material theme
	allowDuplicateUrls: true, // allow loading of new pages that have same url as currently "active" page in View
	modalTitle: 'F7WP'
});
	
// Export selectors engine
var $$ = Dom7;

// Templates using Template7 template engine
// myApp.homeTemplate = Template7.compile($$('#home-page').html()); // home page loads by default and looks like static
myApp.categoryTemplate = Template7.compile($$('#category-page').html());
myApp.postTemplate = Template7.compile($$('#post-page').html());


// Add main View
var mainView = myApp.addView('.view-main', {
    // domCache: true// Enable Dom Cache so we can use all inline pages
});

// alert code
$$('.alert-text-title').on('click', function () {
    myApp.alert(mainView.activePage.name, 'Custom Title!');
});

// Click event on link to Category List Page
$$('.load-dynamic-page-category').on('click', function(){
	var catid = $$(this).attr('data-catid');
	var categoryUrl = 'http://27biletov.ru/wp-json/wp/v2/posts?filter[cat]='+catid;
	// console.log( "catid:" + catid + "; carURL: " + categoryUrl);
	
	$$.getJSON(categoryUrl, function (json) {
	// console.log( json );
	var pageContent = myApp.categoryTemplate(json);
	// console.log( pageContent );
	mainView.loadContent(pageContent);
	});
});




// Click event on link to Post Page
$$('.load-dynamic-page-post').on('click', function(){
	alert( postid );
	var postid = $$(this).attr('data-postid');
	console.log( postid );
	// var postUrl = 'http://27biletov.ru/wp-json/wp/v2/posts/'+postid;
	// console.log( "postid:" + postid + "; postURL: " + postUrl);
	
	// $$.getJSON(postUrl, function (json) {
	// console.log( json );
	// var pageContent = myApp.postTemplate(json);
	// console.log( pageContent );
	// mainView.loadContent(pageContent);
	// });
})
 







