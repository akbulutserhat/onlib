import { BookModal } from '../pages';
import Style from '../styles/book.module.scss';

type Props = {
  book: BookModal;
};

const Book: React.FC<Props> = ({ book }) => {
  return (
    <div className={Style.bookCard}>
      <figure>
        <picture>
          <img
            src={book.image ? book.image : '/public/no-image.jpg'}
            alt='picture of the book'></img>
        </picture>
      </figure>
      <div className={Style.bookInfo}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <div className={Style.categories}>
          {book.categories.map((category, index) => (
            <span className='badge badge-primary' key={index}>
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
