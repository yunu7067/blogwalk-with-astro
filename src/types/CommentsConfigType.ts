import type {GiscusProps, Theme as GiscusTheme} from '@giscus/react';

export type GiscusConfigProps = GiscusProps & {lightTheme: GiscusTheme; darkTheme: GiscusTheme};
export type CommentsProvider = 'giscus';
export interface CommentsType {
  enabled: boolean;
  provider?: CommentsProvider;

  giscus?: GiscusConfigProps;
}
