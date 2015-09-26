Template.post_page.helpers({
  video: function () {
    return this.media && this.media.type === "video" && this.media;
  },
  showThumbnail: function () {
    return this.thumbnailUrl && !(this.media && this.media.type === "video");
  }
});

Template.post_page.onRendered(function () {
  $(".js-video").fitVids();
  $(".body-overlay").css("background-image", "url("+this.data.post.thumbnailUrl+")");
});

Template.post_page.onDestroyed(function () {
  $(".body-overlay").css("background-image", "");
});