import {Button} from '@com/atoms';
import {MagnifyingGlassIcon} from '@radix-ui/react-icons';
import {styled} from '@style/createStyles';

interface SearchSectionProps {}

const StyledSearchForm = styled('form', {
  maxWidth: '636px',
  width: '100%',
  height: '40px',
  display: 'flex',
  paddingX: '$3',
  gap: '$2',
  marginTop: '$1',
  marginBottom: '$2',

  input: {
    borderWidth: '1px',
    borderRadius: '6px',
    borderColor: '$btn-border',
    width: '100%',
    height: '40px',
    paddingX: '$2',
  },
  button: {
    flex: 'none',
    width: '40px',
    height: '40px',
  },

  variants: {
    responsive: {
      small: {},
      medium: {
        paddingX: '$4',
      },
      large: {
        paddingX: '0',
      },
    },
  },
});

export default function SearchForm(props: SearchSectionProps) {
  return (
    <StyledSearchForm
      action='/search/'
      role='search'
      responsive={{
        '@initial': 'small',
        '@small': 'small',
        '@medium': 'medium',
        '@large': 'large',
      }}
    >
      <input type='search' name='keyword' spellCheck='false' aria-label='Search' />
      <Button content='icon' aria-label='Submit Search'>
        <MagnifyingGlassIcon />
      </Button>
    </StyledSearchForm>
  );
}
