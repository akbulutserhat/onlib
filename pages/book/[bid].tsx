import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BookModal } from '..';

const BookDetail: React.FC = () => {
  const router = useRouter();
  const [book, setBook] = useState<BookModal>();
  const { bid } = router.query;
  useEffect(() => {
    fetch(`http://localhost:5000/book/${bid}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  return <pre>{JSON.stringify(book, null, 2)}</pre>;
};

export default BookDetail;
