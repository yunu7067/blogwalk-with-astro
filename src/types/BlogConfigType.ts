import {CommentsType} from 'src/types/CommentsType';

type SocialIdentifiers = 'github' | 'twitter' | 'discord' | 'notion' | 'instagram' | 'linkedin';

interface SocialConfigType {
  identifier: SocialIdentifiers;
  name: string;
  url: string;
}

interface AvatarConfigType {
  enabled: boolean;
  src: string;
}

interface BlogConfigType {
  title: string;
  subtitle?: string;
  baseurl: string;
  avatar: AvatarConfigType;
  social?: SocialConfigType[];
  comments: CommentsType;
}

export type {BlogConfigType, SocialConfigType, SocialIdentifiers};
