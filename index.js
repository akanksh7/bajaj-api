require('dotenv').config();
const express = require('express');
const cors = require('cors');

const server = express();
const SERVER_PORT = process.env.PORT || 3500;

server.use(cors());
server.use(express.json());

function makeUserId(fullName = 'akanksh_gprabhu', dob = '29072004') {
  const cleanedName = String(fullName)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
  const rawDigits = String(dob).replace(/\D/g, '');
  const ddmmyyyy = rawDigits.length === 8 ? rawDigits : dob;
  return `${cleanedName}_${ddmmyyyy}`;
}

server.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: 'Invalid data format: "data" must be an array' });
    }

    const evenList = [];
    const oddList = [];
    const alphaList = [];
    const specialList = [];
    let totalSum = 0;
    const letterSequence = [];

    for (const entry of data) {
      const token = String(entry).trim();
      if (/^[+-]?\d+$/.test(token)) {
        const n = parseInt(token, 10);
        if (Math.abs(n) % 2 === 0) {
          evenList.push(token);
        } else {
          oddList.push(token);
        }
        totalSum += n;
      } else if (/^[a-zA-Z]+$/.test(token)) {
        alphaList.push(token.toUpperCase());
        for (const ch of token) letterSequence.push(ch);
      } else {
        if (token.length > 0) specialList.push(token);
      }
    }

    const reversedLetters = letterSequence.reverse();
    const formattedArr = reversedLetters.map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()));
    const concat_string = formattedArr.join('');

    const responsePayload = {
      is_success: true,
      user_id: makeUserId(process.env.FULL_NAME || 'akanksh_gprabhu', process.env.DOB || '29072004'),
      email: process.env.EMAIL_ID || 'i.am.akanksh@gmail.com',
      roll_number: process.env.REG_NO || '22bce0122',
      odd_numbers: oddList,
      even_numbers: evenList,
      alphabets: alphaList,
      special_characters: specialList,
      sum: String(totalSum),
      concat_string
    };

    return res.status(200).json(responsePayload);
  } catch (err) {
    console.error('Error in /bfhl:', err);
    return res.status(500).json({ is_success: false, message: 'Internal server error' });
  }
});

server.get('/bfhl', (req, res) => {
  return res.status(200).json({
    is_success: true,
    user_id: makeUserId(process.env.FULL_NAME || 'akanksh_gprabhu', process.env.DOB || '29072004')
  });
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const server = express();
const SERVER_PORT = process.env.PORT || 3500;

server.use(cors());
server.use(express.json());

function makeUserId(fullName = 'akanksh_gprabhu', dob = '29072004') {
  const cleanedName = String(fullName)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
  const rawDigits = String(dob).replace(/\D/g, '');
  const ddmmyyyy = rawDigits.length === 8 ? rawDigits : dob;
  return `${cleanedName}_${ddmmyyyy}`;
}

server.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: 'Invalid data format: "data" must be an array' });
    }

    const evenList = [];
    const oddList = [];
    const alphaList = [];
    const specialList = [];
    let totalSum = 0;
    const letterSequence = [];

    for (const entry of data) {
      const token = String(entry).trim();
      if (/^[+-]?\d+$/.test(token)) {
        const n = parseInt(token, 10);
        if (Math.abs(n) % 2 === 0) {
          evenList.push(token);
        } else {
          oddList.push(token);
        }
        totalSum += n;
      } else if (/^[a-zA-Z]+$/.test(token)) {
        alphaList.push(token.toUpperCase());
        for (const ch of token) letterSequence.push(ch);
      } else {
        if (token.length > 0) specialList.push(token);
      }
    }

    const reversedLetters = letterSequence.reverse();
    const formattedArr = reversedLetters.map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()));
    const concat_string = formattedArr.join('');

    const responsePayload = {
      is_success: true,
      user_id: makeUserId(process.env.FULL_NAME || 'akanksh_gprabhu', process.env.DOB || '29072004'),
      email: process.env.EMAIL_ID || 'i.am.akanksh@gmail.com',
      roll_number: process.env.REG_NO || '22bce0122',
      odd_numbers: oddList,
      even_numbers: evenList,
      alphabets: alphaList,
      special_characters: specialList,
      sum: String(totalSum),
      concat_string
    };

    return res.status(200).json(responsePayload);
  } catch (err) {
    console.error('Error in /bfhl:', err);
    return res.status(500).json({ is_success: false, message: 'Internal server error' });
  }
});

server.get('/bfhl', (req, res) => {
  return res.status(200).json({
    is_success: true,
    user_id: makeUserId(process.env.FULL_NAME || 'akanksh_gprabhu', process.env.DOB || '29072004')
  });
});

server.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));