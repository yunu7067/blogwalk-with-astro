import {Button} from '@com/atoms';
import {MagnifyingGlassIcon} from '@radix-ui/react-icons';
import {styled} from '@style/createStyles';

interface SearchSectionProps {}

const StyledSearchForm = styled('form', {
  height: '36px',
  display: 'flex',
  gap: '$1',

  input: {
    borderRadius: '6px',
    borderColor: '$btn-border',
    width: '100%',
    height: '36px',
    paddingX: '$2',
  },
  button: {
    width: '36px',
    height: '36px',
  },
});

export default function SearchForm(props: SearchSectionProps) {
  return (
    <StyledSearchForm action='/search/'>
      <input type='text' name='keyword' />
      <Button content='icon'>
        <MagnifyingGlassIcon />
      </Button>
    </StyledSearchForm>
  );
}
