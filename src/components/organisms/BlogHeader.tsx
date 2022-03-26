import SocialButtonCollection from '@com/organisms/SocialButtonCollection';
import {styled} from '@style/createStyles';
import {BlogConfigType} from '@types';
import Link from 'next/link';

const StyledBlogHeader = styled('header', {
  width: '100%',

  variants: {
    padding: {
      1: {
        paddingX: '$2',
        paddingY: '$5',
      },
      2: {
        paddingX: '0',
        paddingY: '$5',
      },
    },
  },
});

const StyledAvatar = styled('div', {
  display: 'inline-block',
  width: '96px',
  height: '96px',
  marginRight: '$3',
  borderRadius: '29px',
  overflow: 'hidden',

  '& > img': {
    width: '100%',
    height: '100%',
  },
});

const StyledBlogMetadata = styled('div', {
  display: 'inline-block',
  height: '96px',
  paddingY: '$1',
  overflow: 'hidden',

  '& > h1': {
    marginBottom: '$2',
    fontSize: '$6',
    fontWeight: '700',
  },
  '& > p': {
    marginBottom: '$3',
    fontSize: '$2',
  },
});

export default function BlogHeader({config}: {config: BlogConfigType}) {
  return (
    <StyledBlogHeader
      padding={{
        '@initial': '1',
        '@bp2': '2',
      }}
    >
      <StyledAvatar>
        {config.avatar?.enabled && <img src={`/${config.avatar.src}`} alt='avatar' width='64' />}
      </StyledAvatar>
      <StyledBlogMetadata>
        <h1>
          <Link href='/'>
            <a>{config.title || ''}</a>
          </Link>
        </h1>
        <p>{config.subtitle}</p>
        <SocialButtonCollection social={config.social} />
      </StyledBlogMetadata>
    </StyledBlogHeader>
  );
}
