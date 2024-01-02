import MyRouter from "./featchers/global/routes/MyRoutes"
import Footer from "./featchers/global/layout/Footer"

function App() {
  return (
    <div className='app' style={{ justifyContent: "center", alignItems: "center" }}>
      <MyRouter />
      <Footer />
    </div>
  )
}

export default App