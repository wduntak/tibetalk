Template.post_domain.helpers({
  domain: function(){
    var a = document.createElement('a');
    a.href = this.url;
    var host = a.hostname;
    return (host).replace('www.','');
  }
});