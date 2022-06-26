import {GiscusProps} from 'src/types/giscus';

export interface GiscusConfigProps extends GiscusProps {}

export type CommentsProvider = 'giscus';

export interface CommentsType {
  enabled: boolean;
  provider?: CommentsProvider;
  giscus?: GiscusConfigProps;
}
