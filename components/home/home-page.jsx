import Image from 'next/image';
import Link from 'next/link';

export function HomePage({ events_categories }) {
  return (
    <main className="home_body">
      {events_categories.map(({ id, image, title, description }) => {
        return (
          <Link className="card" href={`/events/${id}`} key={id}>
            <div className="image">
              <Image src={image} alt={title} width={300} height={250} />
            </div>

            <div className="content">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
