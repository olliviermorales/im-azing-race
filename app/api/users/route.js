import { connectToDB } from '@/utils/database';
import Users from '@/models/user';

export const GET = async (req) => {
  try {
    await connectToDB();

    const users = await Users.find();

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all users', { status: 500 });
  }
};
