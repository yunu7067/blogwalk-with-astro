export type SocialIdentifiers =
  | 'github'
  | 'facebook'
  | 'twitter'
  | 'discord'
  | 'instagram'
  | 'linkedin'
  | 'npmjs'
  | 'youtube';
export interface SocialConfigType {
  identifier: SocialIdentifiers;
  name: string;
  url: string;
}
