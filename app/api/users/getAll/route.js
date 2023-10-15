export const GET = async (req) => {
  try {
    await connectToDB();

    // Fetch the timestamp of the last modified user
    const lastModifiedUser = await Users.findOne()
      .sort({ updatedAt: -1 })
      .select('updatedAt');
    const lastModifiedTimestamp = lastModifiedUser?.updatedAt;

    // If there's an If-Modified-Since header, compare the dates
    const clientTimestamp = new Date(req.headers.get('If-Modified-Since'));
    if (lastModifiedTimestamp && clientTimestamp >= lastModifiedTimestamp) {
      return new Response(null, { status: 304 }); // No need to send data, just the status
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
