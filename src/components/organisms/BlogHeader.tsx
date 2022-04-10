import SocialButtonCollection from '@com/organisms/SocialButtonCollection';
import {styled} from '@style/createStyles';
import {BlogConfigType} from '@types';
import Link from 'next/link';

const StyledBlogHeader = styled('header', {
  width: '100%',
  color: '$fg-default',
  paddingTop: '$3',
  paddingBottom: '$1',
  display: 'flex',

  variants: {
    responsive: {
      1: {
        gap: '1ch',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
      },
      2: {
        gap: '2ch',
        textAlign: 'start',
        alignItems: 'flex-start',
        flexDirection: 'row',
      },
    },
  },
});

const StyledAvatar = styled('div', {
  flex: 'none',
  width: '96px',
  height: '96px',
  borderRadius: '29px',
  overflow: 'hidden',

  '& > img': {
    width: '100%',
    height: '100%',
  },
});

const StyledBlogMetadata = styled('div', {
  flex: 'auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '96px',
  paddingY: '$1',
  overflow: 'hidden',

  '& > h1': {
    flex: 'none',
    marginBottom: '$2',
    fontSize: '$6',
    fontWeight: '700',
  },
  '& > p': {
    flex: 'auto',
    fontSize: '$2',
  },
  '& > div': {
    flex: 'none',
  },
});

export default function BlogHeader({config}: {config: BlogConfigType}) {
  return (
    <StyledBlogHeader
      responsive={{
        '@initial': '1',
        '@bp1': '2',
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
