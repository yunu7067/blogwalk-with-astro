import {GiscusProps} from '@types';

export interface GiscusConfigProps extends GiscusProps {}

export type CommentsProvider = 'giscus';

export interface CommentsType {
  enabled: boolean;
  provider?: CommentsProvider;
  giscus?: GiscusConfigProps;
}
