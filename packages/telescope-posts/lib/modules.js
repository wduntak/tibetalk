
Telescope.modules.add("top", {
  template: 'views_menu',
  order: 99,
  only: ["posts_default", "posts_top", "posts_new", "posts_best", "posts_pending", "posts_scheduled"]
});


Telescope.modules.add("postComponents", [
  {
    template: 'post_rank',
    order: 10
  },
  {
    template: 'post_vote',
    order: 20
  },
  {
    template: 'post_content',
    order: 1
  },
  // {
  //   template: 'post_avatars',
  //   order: 30
  // },
  {
    template: 'post_discuss',
    order: 40
  },
  {
    template: 'post_actions',
    order: 50
  }
]);

Telescope.modules.add("postHeading", [
  {
    template: 'post_title',
    order: 20
  },
  {
    template: 'post_avatars',
    order: 25
  },
  {
    template: 'post_author',
    order: 30
  },
  {
    template: 'post_info',
    order: 35
  }
  // {
  //   template: 'post_domain',
  //   order: 30
  // }
]);

Telescope.modules.add("postMeta", [
  // {
  //   template: 'post_author',
  //   order: 10
  // },
  // {
  //   template: 'post_info',
  //   order: 20
  // },
  {
    template: 'post_comments_link',
    order: 30
  },
  {
    template: 'post_admin',
    order: 50
  }
]);
