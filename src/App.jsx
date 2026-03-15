import Cursor     from '@/components/Cursor'
import Topbar     from '@/components/Topbar'
import Hero       from '@/components/Hero'
import About      from '@/components/About'
import Experience from '@/components/Experience'
import Skills     from '@/components/Skills'
import Projects   from '@/components/Projects'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'

export default function App() {
  return (
    <>
      {/* Custom cursor — hidden on touch devices via CSS */}
      <Cursor />

      {/* Fixed top navigation */}
      <Topbar />

      {/* Page offset for fixed header */}
      <main className="pt-[60px]">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
