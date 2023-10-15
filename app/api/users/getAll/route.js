import { connectToDB } from '@/utils/database';
import Users from '@/models/user';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      await connectToDB();

      const users = await Users.find();

      res.setHeader(
        'Cache-Control',
        'no-store, no-cache, must-revalidate, proxy-revalidate'
      );
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch all users' });
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
