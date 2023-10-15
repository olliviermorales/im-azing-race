import { connectToDB } from '@/utils/database';
import Users from '@/models/user';

export const POST = async (req) => {
  const {
    fullName,
    nickName,
    contactNumber,
    yearLevel,
    hospital,
    isContactable,
  } = await req.json();
  try {
    await connectToDB();
    const newUser = new Users({
      fullName,
      nickName,
      contactNumber,
      yearLevel,
      hospital,
      isContactable,
    });
    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new user', { status: 500 });
  }
};
