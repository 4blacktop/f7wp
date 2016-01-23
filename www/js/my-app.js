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


// Call onDeviceReady when PhoneGap is loaded.
// At this point, the document has loaded but phonegap-1.0.0.js has not.
// When PhoneGap is loaded and talking with the native device,
// it will call the event deviceready.
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() { // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
	document.addEventListener("backbutton", onBackKeyDown, false); // Register the event listener backButton
}

function onBackKeyDown() { // Handle the back button
	if(mainView.activePage.name == "home"){ navigator.app.exitApp(); }
	else { mainView.router.back(); }
}


// alert code 1st home  ====================================
$$('.alert-text-title').on('click', function () {
    myApp.alert(mainView.activePage.name, 'Home!');
});

/* $$('.demo-progressbar-infinite-multi-overlay .button').on('click', function () {
    var container = $$('body');
    if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
    myApp.showProgressbar(container, 'multi');
    setTimeout(function () {
        myApp.hideProgressbar();
    }, 5000);
}); */

// Click event 1st home on link to Category List Page
$$('.load-dynamic-page-category').on('click', function(){
	var catid = $$(this).attr('data-catid');
	var categoryUrl = 'http://27biletov.ru/wp-json/wp/v2/posts?filter[cat]='+catid;
	console.log( "catid:" + catid + "; carURL: " + categoryUrl);
	
	var container = $$('body');
    if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
    myApp.showProgressbar(container, 'multi');
	
	$$.getJSON(categoryUrl, function (json) {
	console.log( json );
	var pageContent = myApp.categoryTemplate(json);
	
	myApp.hideProgressbar();
	
	mainView.loadContent(pageContent);
	});
});

// Click event on link to Post Page 
$$('.load-dynamic-page-post').on('click', function(){
	var postid = $$(this).attr('data-postid');
	var postUrl = 'http://27biletov.ru/wp-json/wp/v2/posts/'+postid;
	console.log( "postid:" + postid + "; postURL: " + postUrl);
	
	var container = $$('body');
    if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
    myApp.showProgressbar(container, 'multi');
	
	$$.getJSON(postUrl, function (json) {
	console.log( json );
	var pageContent = myApp.postTemplate(json);
	
	myApp.hideProgressbar();
	
	mainView.loadContent(pageContent);
	});
});




// Initializing Home Page ====================================
myApp.onPageInit('home',function(page){
	$$(page.container).on('click','.alert-text-title',function(){
		myApp.alert(mainView.activePage.name, 'Home!');
	});
	
	
	
	// Click event 1st home on link to Category List Page
	$$('.load-dynamic-page-category').on('click', function(){
		var catid = $$(this).attr('data-catid');
		var categoryUrl = 'http://27biletov.ru/wp-json/wp/v2/posts?filter[cat]='+catid;
		console.log( "catid:" + catid + "; carURL: " + categoryUrl);
		
		var container = $$('body');
		if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
		myApp.showProgressbar(container, 'multi');
		
		$$.getJSON(categoryUrl, function (json) {
		console.log( json );
		var pageContent = myApp.categoryTemplate(json);
		
		myApp.hideProgressbar();
		
		mainView.loadContent(pageContent);
		});
	});


	// Click event on link to Post Page 
	$$('.load-dynamic-page-post').on('click', function(){
		var postid = $$(this).attr('data-postid');
		var postUrl = 'http://27biletov.ru/wp-json/wp/v2/posts/'+postid;
		console.log( "postid:" + postid + "; postURL: " + postUrl);
		
		var container = $$('body');
		if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
		myApp.showProgressbar(container, 'multi');
		
		$$.getJSON(postUrl, function (json) {
		console.log( json );
		var pageContent = myApp.postTemplate(json);
		
		myApp.hideProgressbar();
		
		mainView.loadContent(pageContent);
		});
	});
});



// Initializing Category Page ====================================
myApp.onPageInit('category',function(page){
	$$(page.container).on('click','.alert-text-title',function(){
		myApp.alert(mainView.activePage.name, 'Category!');
	});
	
	
	// Click event on link to Post Page 
	$$('.load-dynamic-page-post').on('click', function(){
		var postid = $$(this).attr('data-postid');
		var postUrl = 'http://27biletov.ru/wp-json/wp/v2/posts/'+postid;
		console.log( "postid:" + postid + "; postURL: " + postUrl);
		
		var container = $$('body');
		if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
		myApp.showProgressbar(container, 'multi');
		
		$$.getJSON(postUrl, function (json) {
		console.log( json );
		var pageContent = myApp.postTemplate(json);
		
		myApp.hideProgressbar();
		
		mainView.loadContent(pageContent);
		});
	});
	
});


// Initializing Post Page
myApp.onPageInit('post',function(page){
	$$(page.container).on('click','.alert-text-title',function(){
		myApp.alert(mainView.activePage.name, 'Post!');
	});
	
});




	// debug-info
	// $$('.debug-info').on('click', function(){
		// console.log( mainView.activePage.name);
	// });


/* 
// not working!!!	
// document.addEventListener("menubutton", onMenuKeyDown, false); // Register the event listener menuButton
function onMenuKeyDown() { // Handle the mnu button
alert ( "menubutton" );
	myApp.openPanel(left);
	if ($$('body').hasClass('with-panel-left-cover')) {
		console.log('Left Panel is opened');
		myApp.openPanel(left);
		}
	else { 
		console.log('Left Panel is closed');
		myApp.closePanel();
		}
}	
 */