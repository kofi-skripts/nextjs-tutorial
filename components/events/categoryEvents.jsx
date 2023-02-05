import Image from 'next/image';
import Link from 'next/link';

export default function CategoryEvent({ allEvents, pageTitle }) {
  return (
    <div className="cat_events">
      <h1>
        Events in{' '}
        <span style={{ textTransform: 'capitalize' }}>{pageTitle}</span>
      </h1>

      <div className="content">
        {allEvents.map(({ id, title, city, description, image }) => (
          <Link className="card" href={`/events/${city}/${id}`} key={id}>
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
            />
            <h2>{title}</h2>
            <p>{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
