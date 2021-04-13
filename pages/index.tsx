import { GetStaticProps } from 'next';
import { useState } from 'react';
import BookCard from '../components/BookCard';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export interface BookModal {
  _id: string;
  title: string;
  author: string;
  description?: Array<string>;
  categories?: Array<string>;
  readLink?: string;
  image?: string;
  libraries?: Array<string>;
}
interface Props {
  books?: Array<BookModal>;
}

const IndexPage: React.FC<Props> = ({ books }) => {
  const route = useRouter();
  const [currentBooks, setCurrentBooks] = useState(books);
  const bookCardClicked = (id) => {
    route.push(`book/${id}`);
  };
  return (
    <Layout title='Onlib'>
      <div className='row'>
        {currentBooks.map((book) => (
          <div
            className='col-12 col-md-6 col-lg-4 mb-3'
            key={book._id}
            onClick={() => bookCardClicked(book._id)}>
            <BookCard book={book} key={book._id}></BookCard>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:5000/book/books/page=0&limit=24');
  const data = await res.json();
  return {
    props: {
      books: data.data,
    },
  };
};

export default IndexPage;
