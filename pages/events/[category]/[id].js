import SingleEvent from '@/components/events/singleEvent';
import Head from 'next/head';
import Image from 'next/image';

export default function Event({ event }) {
  return (
    <>
      <SingleEvent event={event} />
    </>
  );
}

export async function getStaticPaths() {
  const { allEvents: data } = await import('/data/data.json');
  const paths = data.map(({ id, city }) => {
    return {
      params: { id: `${id}`, category: `${city}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { allEvents: data } = await import('/data/data.json');
  const event = data.find((event) => event.id === params.id);

  return {
    props: {
      event,
    },
  };
}
