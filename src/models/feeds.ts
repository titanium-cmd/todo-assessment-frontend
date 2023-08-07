// export interface Feeds {
//   post_type: 'activity_post' | 'photo_set',
//   tagged_friends: [null],
//   category: string,
//   name: string,
//   biography: string,
//   impact: string,
//   notify_nominee: 'no' | 'yes',
//   add_project: 'no' | 'yes',
//   project: string,
//   user_status: string,
//   privacy: number,
// }
interface Feeds {
  click_ref: null;
  comment_item_id: number;
  comment_type_id: string;
  creation_date: string;
  embed_object: {
    id: number;
    module_name: string;
    resource_name: string;
    remain_photo: number;
    user_id: number;
    // ... add more properties as needed
  };
  extra: {
    can_search: boolean;
    can_view: boolean;
    can_like: boolean;
    can_share: boolean;
    can_delete: boolean;
    // ... add more properties as needed
  };
  id: number;
  info: string;
  invisible: boolean;
  is_hidden: boolean;
  is_hidden_all: boolean;
  is_just_hide: boolean;
  is_just_remove_tag: boolean;
  is_liked: boolean;
  is_owner_tagged: boolean;
  is_pending: boolean;
  is_saved: boolean;
  is_shared_feed: boolean;
  is_show_location: boolean;
  is_sponsor: boolean;
  item_id: number;
  item_type: string;
  like_item_id: number;
  like_phrase: null | string;
  like_type_id: string;
  link: string;
  location: null | string;
  modification_date: string;
  module_name: string;
  most_reactions: Array<any>; // Update with appropriate type
  owner_full_name: string;
  parent_user: null;
  pins: Array<any>; // Update with appropriate type
  privacy: number;
  privacy_detail: {
    privacy_icon: number;
    tooltip: string;
    label: string;
  };
  related_comments: Array<any>; // Update with appropriate type
  related_comments_statistic: {
    total_hidden: number;
  };
  relevant_comments: null;
  resource_name: string;
  role_label: null;
  statistic: {
    total_like: number;
    total_comment: number;
    total_reply: number;
    total_view: number;
    total_share: number;
  };
  status: string;
  status_background: null;
  tagged_friends: Array<any>; // Update with appropriate type
  total_friends_tagged: number;
  type_id: string;
  url: string;
  user: {
    id: number;
    module_name: string;
    resource_name: string;
    full_name: string;
    user_name: string;
    // ... add more properties as needed
  };
  user_full_name: string;
  user_reacted: Array<any>; // Update with appropriate type
}
