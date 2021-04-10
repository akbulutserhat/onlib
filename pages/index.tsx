import { GetServerSideProps, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import Book from '../components/Book';
import Layout from '../components/Layout';

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
  const [currentBooks, setCurrentBooks] = useState(books);
  return (
    <Layout title='Onlib'>
      {currentBooks.map((book) => (
        <Book book={book} key={book._id}></Book>
      ))}
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
