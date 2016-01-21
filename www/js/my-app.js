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


// alert code 1st home
console.log( "1st home init" );
$$('.alert-text-title').on('click', function () {
    myApp.alert(mainView.activePage.name, 'Home!');
});

// Click event 1st home on link to Category List Page
$$('.load-dynamic-page-category').on('click', function(){
	var catid = $$(this).attr('data-catid');
	var categoryUrl = 'http://27biletov.ru/wp-json/wp/v2/posts?filter[cat]='+catid;
	console.log( "catid:" + catid + "; carURL: " + categoryUrl);
	$$.getJSON(categoryUrl, function (json) {
	console.log( json );
	var pageContent = myApp.categoryTemplate(json);
	// console.log( pageContent );
	mainView.loadContent(pageContent);
	});
});

// Click event on link to Post Page
$$('.load-dynamic-page-post').on('click', function(){
	var postid = $$(this).attr('data-postid');
	// console.log( postid );
	var postUrl = 'http://27biletov.ru/wp-json/wp/v2/posts/'+postid;
	console.log( "postid:" + postid + "; postURL: " + postUrl);
	
	$$.getJSON(postUrl, function (json) {
	console.log( json );
	var pageContent = myApp.postTemplate(json);
	// console.log( pageContent );
	mainView.loadContent(pageContent);
	});
});

	// debug-info
	$$('.debug-info').on('click', function(){
		// console.log( page);
		console.log( mainView.activePage.name);
		
		// console.log( mainView.params);
		// console.log( mainView.history);
		// console.log( mainView.contentCache);
		// console.log( mainView.url);
		// console.log( mainView.pagesContainer);
		// console.log( mainView.activePage);
		// console.log( mainView.main);
		// console.log( mainView.router);
		});



// Initializing Home Page
myApp.onPageInit('home',function(page){
	// alert
	console.log( "category init" );
	$$(page.container).on('click','.alert-text-title',function(){
		console.log( "function alert" );
		myApp.alert(mainView.activePage.name, 'Home!');
	});
	
	// debug-info
	$$('.debug-info').on('click', function(){
		// console.log( page);
		console.log( mainView.activePage.name);
		
		// console.log( mainView.params);
		// console.log( mainView.history);
		// console.log( mainView.contentCache);
		// console.log( mainView.url);
		// console.log( mainView.pagesContainer);
		// console.log( mainView.activePage);
		// console.log( mainView.main);
		// console.log( mainView.router);
		});
	
	// Click event 1st home on link to Category List Page
	$$('.load-dynamic-page-category').on('click', function(){
		var catid = $$(this).attr('data-catid');
		var categoryUrl = 'http://27biletov.ru/wp-json/wp/v2/posts?filter[cat]='+catid;
		console.log( "catid:" + catid + "; carURL: " + categoryUrl);
		$$.getJSON(categoryUrl, function (json) {
		console.log( json );
		var pageContent = myApp.categoryTemplate(json);
		// console.log( pageContent );
		mainView.loadContent(pageContent);
		});
	
	
	// Click event on link to Post Page
	$$('.load-dynamic-page-post').on('click', function(){
		var postid = $$(this).attr('data-postid');
		// console.log( postid );
		var postUrl = 'http://27biletov.ru/wp-json/wp/v2/posts/'+postid;
		console.log( "postid:" + postid + "; postURL: " + postUrl);
		
		$$.getJSON(postUrl, function (json) {
		console.log( json );
		var pageContent = myApp.postTemplate(json);
		// console.log( pageContent );
		mainView.loadContent(pageContent);
		
		
		});
	});	
});


});



// Initializing Category Page
myApp.onPageInit('category',function(page){
	// alert
	console.log( "category init" );
	$$(page.container).on('click','.alert-text-title',function(){
		console.log( "function alert" );
		myApp.alert(mainView.activePage.name, 'Category!');
	});
	
	// debug-info
	$$('.debug-info').on('click', function(){
		// console.log( page);
		console.log( mainView.activePage.name);
		
		// console.log( mainView.params);
		// console.log( mainView.history);
		// console.log( mainView.contentCache);
		// console.log( mainView.url);
		// console.log( mainView.pagesContainer);
		// console.log( mainView.activePage);
		// console.log( mainView.main);
		// console.log( mainView.router);
		});
	
	// Click event on link to Post Page
	$$('.load-dynamic-page-post').on('click', function(){
		var postid = $$(this).attr('data-postid');
		// console.log( postid );
		var postUrl = 'http://27biletov.ru/wp-json/wp/v2/posts/'+postid;
		console.log( "postid:" + postid + "; postURL: " + postUrl);
		
		$$.getJSON(postUrl, function (json) {
		console.log( json );
		var pageContent = myApp.postTemplate(json);
		// console.log( pageContent );
		mainView.loadContent(pageContent);
		});
	});
});


// Initializing Post Page
myApp.onPageInit('post',function(page){
	// alert
	console.log( "post init" );
	$$(page.container).on('click','.alert-text-title',function(){
		console.log( "function alertfunction alertfunction alertfunction alert" );
		myApp.alert(mainView.activePage.name, 'Post!');
	});
	
	// debug-info
	$$('.debug-info').on('click', function(){
		// console.log( page);
		console.log( mainView.activePage.name);
		
		// console.log( mainView.params);
		// console.log( mainView.history);
		// console.log( mainView.contentCache);
		// console.log( mainView.url);
		// console.log( mainView.pagesContainer);
		// console.log( mainView.activePage);
		// console.log( mainView.main);
		// console.log( mainView.router);
		});
});






