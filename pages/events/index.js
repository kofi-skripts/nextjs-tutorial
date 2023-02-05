import AllEvents from '@/components/events/events-page';

export default function EventsPage({ events_categories }) {
  return <AllEvents events_categories={events_categories} />;
}

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      events_categories,
    },
  };
}
