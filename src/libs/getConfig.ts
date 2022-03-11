import {BlogConfigType} from '@types';

export async function getConfig(): Promise<BlogConfigType> {
  return await import(`../../blog.config`);
}
