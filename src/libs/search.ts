import lunr from 'lunr';
import {PostType} from '@types';

/**
 *
 * @param posts 게시글 json 데이터
 * @param refField 문서의 기본(reference) 필드
 * @param fields 인덱싱할 필드들
 * @returns
 */
export function getSearchIndex(posts: PostType[], refField: string, fields: string[]) {
  const tokenLengthMetadata: lunr.Builder.Plugin = function (builder: lunr.Builder) {
    // Define a pipeline function that stores the token length as metadata
    var pipelineFunction: lunr.PipelineFunction = function (token: lunr.Token) {
      (token as unknown as {metadata: {[index: string]: unknown}}).metadata['tokenLength'] = token.toString().length;
      return token;
    };

    // Register the pipeline function so the index can be serialised
    lunr.Pipeline.registerFunction(pipelineFunction, 'tokenLenghtMetadata');

    // Add the pipeline function to the indexing pipeline
    builder.pipeline.before(lunr.stemmer, pipelineFunction);

    // Whitelist the tokenLength metadata key
    builder.metadataWhitelist.push('tokenLength');
  };

  return lunr(function () {
    // this.use(tokenLengthMetadata);
    this.ref(refField);
    for (let i = 0; i < fields.length; i++) {
      this.field(fields[i]);
    }
    for (let j = 0; j < posts.length; j++) {
      this.add(posts[j]);
    }
  });
}
