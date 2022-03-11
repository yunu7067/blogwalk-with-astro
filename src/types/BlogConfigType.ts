interface AvatarConfigType {
  enabled: boolean;
  src: string;
}

interface BlogConfigType {
  title: string;
  baseurl: string;
  avatar: AvatarConfigType;
}

export type {BlogConfigType};
