import { RevenueCard } from '../components/RevenueCard'
import './App.css'

function App() {
  return (
   <div className='grid grid-cols-4'>
    <RevenueCard title="Amount Pending?" amount="92,310.20" orderCount={13} />
   </div>
  )
} 

export default App
