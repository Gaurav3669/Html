import React from 'react'
import BComponent from './BComponent'
import DataContext from './DataContext'

const AComponent = () => {
    const Vishatnama = "mera grand children ko 4,00,000 cr mai  bhet swroop deta hoonn"
  return (
  <DataContext.Provider value={Vishatnama}>
    <div>
    Acommponent
    <BComponent/>
    </div>
    </DataContext.Provider>
  )
}

export default AComponent