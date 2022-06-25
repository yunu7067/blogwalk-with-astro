import {LocaleConfigType} from './LocaleConfigType';

export type SocialIdentifiers =
  | 'github'
  | 'facebook'
  | 'twitter'
  | 'discord'
  | 'instagram'
  | 'linkedin'
  | 'npmjs'
  | 'youtube'
  | 'email'
  | 'default';
export interface SocialConfigType {
  identifier: SocialIdentifiers;
  name: string;
  url: string;
}

export interface AvatarConfigType {
  enabled: boolean;
  src: string;
}

// export type ThemeIdentifiers = 'auto' | 'light' | 'dark' | 'system';

export interface BlogConfigType {
  title: string;
  description?: string;
  baseurl: string;
  locale: LocaleConfigType;
  avatar: AvatarConfigType;
  social?: SocialConfigType[];
  // post: PostConfigType;
  // comments: CommentsType;
  // theme: ThemeIdentifiers;
}