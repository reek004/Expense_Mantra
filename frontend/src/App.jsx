import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignupPage';
import TransactionPage from '../pages/TransactionPage';
import NotFound from '../pages/NotFound';
import Header from './components/ui/Header';
import { useQuery } from '@apollo/client';
import { GET_AUTHENTICATED_USER } from '../src/graphql/queries/user.query';
import { Toaster } from 'react-hot-toast';

function App() {
  const { loading, error, data } = useQuery(GET_AUTHENTICATED_USER);

  if (loading) return <div>Loading...</div>;
  
  if (error) {
    console.error('Authentication Error:', error);
    return <Navigate to="/login" />;
  }

  const isAuthenticated = Boolean(data?.authUser);

  return (
    <>
      {isAuthenticated && <Header />}
      <Routes>
        <Route 
          path='/' 
          element={isAuthenticated ? <HomePage /> : <Navigate to='/login' />} 
        />
        <Route 
          path='/login' 
          element={!isAuthenticated ? <LoginPage /> : <Navigate to='/' />} 
        />
        <Route 
          path='/signup' 
          element={!isAuthenticated ? <SignUpPage /> : <Navigate to='/' />} 
        />
        <Route
          path='/transaction/:id'
          element={isAuthenticated ? <TransactionPage /> : <Navigate to='/login' />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

