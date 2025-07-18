const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }

    // Restrict registration to only 'user' and 'rider' roles
    if (!['user', 'rider'].includes(role)) {
      return res.status(400).json({ msg: 'Invalid role. Only user and rider roles are allowed.' });
    }

    const client = await connectToDatabase();
    const db = client.db('wayvi');
    const users = db.collection('users');

    // Check if user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = {
      name,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date()
    };

    const result = await users.insertOne(newUser);

    // Create JWT token
    const payload = {
      user: {
        id: result.insertedId,
        role: role
      }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: result.insertedId,
        name,
        email,
        role
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};
