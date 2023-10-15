import { connectToDB } from '@/utils/database';
import Users from '@/models/user';

export const GET = async (req, res) => {
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
};
