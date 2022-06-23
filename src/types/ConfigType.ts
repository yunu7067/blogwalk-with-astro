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
