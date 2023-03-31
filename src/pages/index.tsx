import DashboardTable from '@/components/DashboardTable'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Advance Budget Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className=' m-10'>
      <DashboardTable />
      </div>
  <main>

  </main>
    </div>
  );
}
