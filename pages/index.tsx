import { GetStaticProps } from 'next';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  return (
    <Layout title='Next.js'>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        quibusdam est tempora esse magni. Aspernatur reprehenderit maiores
        facilis recusandae culpa, tempore voluptatem ratione architecto
        asperiores non sunt autem quidem natus.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nihil
        a tempora omnis nisi error accusamus ullam, veniam, perferendis natus
        reiciendis ratione nobis qui ipsa ipsum. Accusamus sit assumenda
        mollitia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, alias
        eveniet ducimus molestias in aut? Id earum ipsa, iure aliquid asperiores
        facilis hic tenetur commodi nobis sequi aspernatur dicta eos?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, alias
        eveniet ducimus molestias in aut? Id earum ipsa, iure aliquid asperiores
        facilis hic tenetur commodi nobis sequi aspernatur dicta eos?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, alias
        eveniet ducimus molestias in aut? Id earum ipsa, iure aliquid asperiores
        facilis hic tenetur commodi nobis sequi aspernatur dicta eos?
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  };
};

export default IndexPage;
