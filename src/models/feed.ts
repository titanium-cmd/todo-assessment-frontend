// export interface Feed {
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


export interface Feed {
  post_type: 'activity_post' | 'photo_set',
  category: string,
  name: string,
  biography: string,
  impact: string,
  notify_nominee: 'no' | 'yes',
  add_project: 'no' | 'yes',
  project: string,
  user_status: string,
  privacy: number,
  photo_files: [
    {
      id: number,
      type: string,
      status: string,
      text: string,
      tagged_friends: number[]
    }
  ],
  "photo_description": string
}

export interface PhotoUploadResult {
  original_name: string,
  item_type: string,
  user_id: number,
  user_type: string,
  width: number,
  height: number,
  temp_file: number,
  url: string
}

interface Photo {
  height: number
  id: number,
  image: Image
}


export interface IncomingFeed {
  click_ref: null;
  comment_item_id: number;
  comment_type_id: string;
  creation_date: string;
  embed_object: {
    album?: Album
    id: number;
    photos: Photo[]
    module_name: string;
    resource_name: string;
    remain_photo: number;
    user_id: number;
  };
  extra: {
    can_search: boolean;
    can_view: boolean;
    can_like: boolean;
    can_share: boolean;
    can_delete: boolean;
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
  item_type: 'activity_post' | 'photo_set';
  like_item_id: number;
  like_phrase: null | string;
  like_type_id: string;
  link: string;
  location: null | string;
  modification_date: string;
  module_name: string;
  most_reactions: Array<any>;
  owner_full_name: string;
  parent_user: null;
  pins: Array<any>;
  privacy: number;
  privacy_detail: {
    privacy_icon: number;
    tooltip: string;
    label: string;
  };
  related_comments: Array<any>;
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
  tagged_friends: Array<any>;
  total_friends_tagged: number;
  type_id: string;
  url: string;
  user: {
    avatar: string | null
    id: number;
    module_name: string;
    resource_name: string;
    full_name: string;
    user_name: string;
  };
  user_full_name: string;
  user_reacted: Array<any>;
}

interface Album {
  album_type: number;
  cover_id: number;
  creation_date: string;
  extra: {
    can_search: boolean;
    can_view: boolean;
    can_like: boolean;
    can_share: boolean;
    can_delete: boolean;
  };
  feed_param: {
    item_id: number;
    comment_type_id: string;
    comment_item_id: number;
    total_comment: number;
    total_like: number;
  };
  group_id: number;
  id: number;
  image: Image;
  is_featured: number;
  is_pending: boolean;
  is_saved: boolean;
  is_sponsor: number;
  item_id: number;
  link: string;
  modification_date: string;
  module_id: null;
  module_name: string;
  name: string;
  owner: {
    id: number;
    module_name: string;
    resource_name: string;
    full_name: string;
    user_name: string;
  };
  privacy: number;
  profile_id: number;
  resource_name: string;
  sponsor_in_feed: number;
  statistic: {
    total_photo: number;
    total_item: number;
    total_like: number;
    total_share: number;
    total_comment: number;
  };
  text: string;
  text_parsed: string;
  timeline_id: number;
  url: string;
};

interface Image {
  75: string;
  100: string;
  150: string;
  240: string;
  500: string;
  origin: string;
}
