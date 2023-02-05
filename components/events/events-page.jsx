import Image from 'next/image';
import Link from 'next/link';

export default function AllEvents({ events_categories }) {
  return (
    <div className="events_page">
      {events_categories.map(({ id, image, title }) => (
        <Link className="card" href={`/events/${id}`} key={id}>
          <Image src={image} width={500} height={500} alt={title} />
          <h2>{title}</h2>
        </Link>
      ))}
    </div>
  );
}
