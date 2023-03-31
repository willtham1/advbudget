// These are the tables that will be displayed on the dashboard
import ButtonsForTables from '@/components/ButtonsForTables'
import DashboardTable from '@/components/DashboardTable'
import DashboardExpense from '@/components/DashboardExpense'
import DashboardSavings from '@/components/DashboardSavings'

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
      <div>
      <ButtonsForTables />
      <div className=' m-10 columns-1'>
      <DashboardTable />
      </div>
      <div className=' m-10 columns-1'>
      <DashboardExpense />
      </div>
      <div className=' m-10 columns-1'>
      <DashboardSavings />
      </div>
      </div>
  <main>

  </main>
    </div>
  );
}
