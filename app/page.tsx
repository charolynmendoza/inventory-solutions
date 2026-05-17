import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <main className='flex w-full flex-col items-center justify-between sm:items-start'>
        <Hero />
      </main>
    </div>
  );
}
