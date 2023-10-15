// Import necessary modules
import { connectToDB } from '@/utils/database';
import Users from '@/models/user';

export const DELETE = async (request, { params }) => {
  try {
    const apiKey = request.headers?.get('Authorization');
    if (apiKey === `Bearer ${process.env.API_PRIVATE_KEY}`) {
      await connectToDB();

      await Users.findByIdAndRemove(params.id);

      return new Response('User deleted successfully', { status: 200 });
    } else {
      return new Response('Unauthorized', { status: 401 });
    }
  } catch (error) {
    return new Response('Failed to delete user', { status: 500 });
  }
};
