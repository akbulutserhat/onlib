import { GetServerSideProps, GetStaticProps } from 'next';
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
  return (
    <Layout title='Onlib'>
      {books.map((book) => (
        <Book book={book} key={book._id}></Book>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:5000/book/all-books');
  const data = await res.json();
  return {
    props: {
      books: data.data,
    },
  };
};

export default IndexPage;
