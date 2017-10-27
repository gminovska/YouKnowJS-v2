import openSocket from 'socket.io-client';

const url = process.env.NODE_ENV === 'production'
  ? undefined
  : 'http://localhost:3001';

const io = openSocket(url);

export default (state = { io }) => ({
  ...state,
});
