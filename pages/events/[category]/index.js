import CategoryEvent from '@/components/events/categoryEvents';

export default function EventPerCity({ allEvents, pageTitle }) {
  return <CategoryEvent allEvents={allEvents} pageTitle={pageTitle} />;
}

export async function getStaticPaths() {
  const { events_categories: data } = await import('/data/data.json');
  const paths = data.map(({ id }) => {
    return {
      params: { category: `${id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { allEvents: data } = await import('/data/data.json');
  const allEvents = data.filter(
    (event) => event?.city?.toLowerCase() === params.category
  );

  return {
    props: {
      allEvents,
      pageTitle: params.category,
    },
  };
}
