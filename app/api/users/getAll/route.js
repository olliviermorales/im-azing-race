import { connectToDB } from '@/utils/database';
import Users from '@/models/user';

export const GET = async (req) => {
  try {
    await connectToDB();

    const lastModifiedUser = await Users.findOne()
      .sort({ updatedAt: -1 })
      .select('updatedAt');
    const lastModifiedTimestamp = lastModifiedUser?.updatedAt;

    const clientTimestamp = new Date(req.headers.get('If-Modified-Since'));
    if (lastModifiedTimestamp && clientTimestamp >= lastModifiedTimestamp) {
      return new Response(null, { status: 304 });
    }

    const users = await Users.find();

    const headers = {
      'Content-Type': 'application/json',
    };

    if (lastModifiedTimestamp) {
      headers['Last-Modified'] = lastModifiedTimestamp.toUTCString();
    }

    return new Response(JSON.stringify(users), { status: 200, headers });
  } catch (error) {
    return new Response('Failed to fetch all users', { status: 500 });
  }
};
