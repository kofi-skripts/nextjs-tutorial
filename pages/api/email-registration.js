import path from 'path';
import fs from 'fs';

function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json');
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  const filePath = buildPath();
  const { allEvents, events_categories } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({ msg: 'Event Data Not Found', status: 404 });
  }

  if (method === 'POST') {
    const { email, eventID } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ msg: 'Invalid email address' });
    }

    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventID) {
        if (event.emails_registered.includes(email)) {
          res.json({ msg: 'This email is already registered' });
          return event;
        }

        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        };
      }

      return event;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      msg: `You have ben registered successfully with email ${email} for the event: ${eventID}`,
    });
  }
}
