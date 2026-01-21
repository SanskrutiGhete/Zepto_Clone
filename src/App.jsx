import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Zepto Clone</h1>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/add-to-cart" element={<AddToCart />} />
          <Route path="/mycart" element={<MyCart />} />
          
        </Route>

      </Routes>
    </div>
  )
}

export default App