// export interface Feeds { }

export interface Feeds {
  click_ref: null;
  comment_item_id: number;
  comment_type_id: string;
  creation_date: string;
  embed_object: EmbedObject;
  extra: Extra;
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
  like_phrase: null;
  like_type_id: string;
  link: string;
  location: null;
  modification_date: string;
  module_name: string;
  most_reactions: MostReaction[];
  owner_full_name: string;
  parent_user: null;
  pins: any[];
  privacy: number;
  privacy_detail: PrivacyDetail;
  related_comments: any[];
  related_comments_statistic: RelatedCommentsStatistic;
  relevant_comments: null;
  resource_name: string;
  role_label: null;
  statistic: Statistic;
  status: string;
  status_background: null;
  tagged_friends: any[];
  total_friends_tagged: number;
  type_id: string;
  url: string;
  user: User;
  user_full_name: string;
  user_reacted: any[];
}

interface EmbedObject {
  id: number;
  friendship: number;
  module_name: string;
  full_name: string;
  avatar: string| null;
  resource_name: string;
  is_processing: boolean;
  image: Image;
}

interface Extra {
  can_search: boolean;
  can_view: boolean;
  can_like: boolean;
  can_share: boolean;
  can_delete: boolean;
}

interface Image {
  origin: string;
  '50x50': string;
  '120x120': string;
  '200x200': string;
}

interface MostReaction {
  id: number
  is_active: number
  is_default: number
  module_name: 'preaction'
  resource_name: 'preaction'
  server_id: 'asset'
  title: 'Like' | 'Love'
  color: string
  icon: string
  icon_mobile: string
}

interface PrivacyDetail {
  privacy_icon: number;
  tooltip: string;
  label: string;
}

interface RelatedCommentsStatistic {
  total_hidden: number;
}

interface Statistic {
  total_like: number;
  total_comment: number;
  total_reply: number;
  total_view: number;
  total_share: number;
}

interface User {
  avatar: Avatar;
  avatar_id: number;
  cover: Cover;
  friendship: number;
  full_name: string;
  id: number;
  is_deleted: boolean;
  is_featured: boolean;
  link: string;
  location: string;
  module_name: string;
  resource_name: string;
  router: string;
  short_name: string;
  statistic: UserStatistic;
  url: string;
  user_name: string;
}

interface Avatar {
  origin: string;
  '50x50': string;
  '120x120': string;
  '200x200': string;
}

interface Cover {
  '100': string;
  '150': string;
  '240': string;
  '500': string;
  '1024': string;
  origin: string;
}

interface UserStatistic {
  total_friend: number;
  total_mutual: number;
}
