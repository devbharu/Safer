import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import NewsFeed from './components/NewsFeed'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import LearningPlayground from './components/LearningPlayground'
import Chatbot from './components/Chatbot'

function App() {
  const [currentPage, setCurrentPage] = useState('news')

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'news':
        return <NewsFeed />
      case 'signin':
        return <SignIn />
      case 'signup':
        return <SignUp />
      case 'playground':
        return <LearningPlayground />
      case 'chatbot':
        return <Chatbot />
      default:
        return <NewsFeed />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  )
}

export default App
