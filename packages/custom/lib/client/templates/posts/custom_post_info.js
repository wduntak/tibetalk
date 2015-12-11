
Template.post_info.onRendered(function () {

	$('.post').mouseenter(function () {
		$(this).find(".post-page-share").addClass("show");
	});
	$('.post').mouseleave(function () { 
		$(this).find(".post-page-share").removeClass("show");
	});
});

Template.post_info.helpers({
  fitBody: function(){
    return Telescope.utils.trimHTML(this.htmlBody, 30);
  }
});
