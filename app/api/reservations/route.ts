import {NextResponse} from 'next/server';

type ReservationPayload = {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  requests?: string;
};

const DEFAULT_RESERVATION_ENDPOINT = 'https://doaba-brandenburg.de/api/reservation.php';

export async function POST(request: Request) {
  let payload: ReservationPayload;

  try {
    payload = (await request.json()) as ReservationPayload;
  } catch {
    return NextResponse.json(
      {success: false, message: 'Invalid JSON body.'},
      {status: 400}
    );
  }

  const endpoint =
    process.env.RESERVATION_BACKEND_URL || DEFAULT_RESERVATION_ENDPOINT;

  try {
    const upstreamResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const text = await upstreamResponse.text();

    try {
      const json = JSON.parse(text) as {success?: boolean; message?: string};
      return NextResponse.json(json, {status: upstreamResponse.status});
    } catch {
      return NextResponse.json(
        {
          success: upstreamResponse.ok,
          message: text || 'Reservation backend did not return JSON.',
        },
        {status: upstreamResponse.status}
      );
    }
  } catch {
    return NextResponse.json(
      {
        success: false,
        message:
          'Unable to reach reservation backend. Please check RESERVATION_BACKEND_URL and backend availability.',
      },
      {status: 502}
    );
  }
}
