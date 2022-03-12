import {LocaleConfigType} from './LocaleConfigType';
import {PostConfigType} from './PostConfigType';
import {CommentsType} from './CommentsConfigType';

export type SocialIdentifiers = 'github' | 'twitter' | 'discord' | 'notion' | 'instagram' | 'linkedin';
export interface SocialConfigType {
  identifier: SocialIdentifiers;
  name: string;
  url: string;
}
export interface AvatarConfigType {
  enabled: boolean;
  src: string;
}
export interface BlogConfigType {
  title: string;
  subtitle?: string;
  baseurl: string;
  locale: LocaleConfigType;
  avatar: AvatarConfigType;
  social?: SocialConfigType[];
  post: PostConfigType;
  comments: CommentsType;
}
