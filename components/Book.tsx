import { BookModal } from '../pages';

type Props = {
  book: BookModal;
};

const Book: React.FC<Props> = ({ book }) => {
  return (
    <>
      <p>{book.title}</p>
    </>
  );
};

export default Book;
