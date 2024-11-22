import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header>
        <h1>CI/CD Demonstration</h1>
        <p>Welcome to this interactive demonstration of Continuous Integration and Continuous Deployment (CI/CD).</p>
      </header>

      <main>
        <section className="info">
          <h2>What is CI/CD?</h2>
          <p>
            <strong>Continuous Integration (CI)</strong> is the practice of automatically integrating changes
            from multiple contributors into a shared project. It ensures that changes are tested and integrated
            frequently to avoid integration issues.
          </p>
          <p>
            <strong>Continuous Deployment (CD)</strong> is the practice of automatically deploying code changes
            to production after passing tests, ensuring that the latest features or fixes are always available to users.
          </p>
        </section>


        <section className="info">
          <h2>Why CI/CD?</h2>
          <ul>
            <li>Automated testing and deployment lead to faster, more reliable releases.</li>
            <li>Reduces manual errors and ensures that code is always production-ready.</li>
            <li>Improves collaboration and transparency across development teams.</li>
          </ul>
        </section>
      </main>

      <footer>
        <p className="credits">
          Created by: <strong>Kert Bancifra, Camille Naces, Angel Hamelton Yacapin</strong>
        </p>
      </footer>
    </div>
  )
}

export default App
