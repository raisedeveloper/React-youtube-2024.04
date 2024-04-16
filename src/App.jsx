import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { AuthContextProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // use-query search 용도 / use-utation? from data 쓰거나 수정할때
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'   // npm i @fontsource/roboto 설치

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <SearchHeader />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}