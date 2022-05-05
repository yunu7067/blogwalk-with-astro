import {styled} from '@style/createStyles';
import {useRouter} from 'next/router';

interface PaginationProps {
  current: number;
  pageNums: number[];
}

const StyledPaginationList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
});
const StyledPaginationItem = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',

  border: '0',
  outline: '0',

  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  textDecoration: 'none',
  fontWeight: '400',
  fontSize: '0.875rem',
  lineHeight: '100%',
  borderRadius: '16px',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '0px 6px',
  minWidth: '32px',
  height: '32px',
  margin: '0px 3px',
  color: 'gray',

  '&.selected': {
    cursor: 'default',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'rgb(144, 202, 249)',
  },
});

export default function Pagination({current, pageNums}: PaginationProps) {
  const {push} = useRouter();
  const movePage = (pageNum: number) => {
    push(`/page/${pageNum}`);
    console.log({current, pageNums});
  };

  return (
    <nav aria-label='pagination navigation'>
      <StyledPaginationList>
        {pageNums.map(pageNum => (
          <li key={`page-${pageNum}`}>
            <StyledPaginationItem
              type='button'
              className={current === pageNum ? 'selected' : ''}
              disabled={current === pageNum}
              aria-current={current === pageNum}
              aria-label={current === pageNum ? `page ${pageNum}` : `Go to page ${pageNum}`}
              onClick={() => movePage(pageNum)}
            >
              {pageNum}
            </StyledPaginationItem>
          </li>
        ))}
      </StyledPaginationList>
    </nav>
  );
}
