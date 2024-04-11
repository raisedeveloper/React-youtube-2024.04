import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // use-query search 용도 / use-utation? from data 쓰거나 수정할때

const queryClient = new QueryClient();

export default function App() {
  console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}