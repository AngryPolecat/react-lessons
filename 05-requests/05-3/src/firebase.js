import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD8NKXxnIyiMuz9hLqHPi1BCeJ-y5KPmXY',
  authDomain: 'todos-bcfc7.firebaseapp.com',
  projectId: 'todos-bcfc7',
  storageBucket: 'todos-bcfc7.appspot.com',
  messagingSenderId: '613260564912',
  appId: '1:613260564912:web:d785bf343fd595d9f45e75',
  databaseURL:
    'https://todos-bcfc7-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
