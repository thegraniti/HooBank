import React from 'react'
import {clients} from '../constants'
import styles from '../style'

function Clients() {

  const showClients = clients.map(client => {
    return <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] py-5 brands rounded-[10px]`}>
        <img src={client.logo} alt="clients" className="sm:w-[192px] w-[100px] object-contain" />
    </div>
  })

  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {showClients}
      </div>
    </section>
  )
}

export default Clients