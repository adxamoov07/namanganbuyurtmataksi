import React, { useState } from 'react'
import './Namangan.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Toshkent() {

  const [qayerdan, setQayerdan] = useState("")
  const [tuman, setTuman] = useState('')
  const [odam, setOdam] = useState('')
  const [nechta, setNechta] = useState('')
  const [qachon, setQachon] = useState('')
  const [soat, setSoat] = useState('')
  const [nomer, setNomer] = useState('')

  function sendData(e) {
    e.preventDefault()




    let fromWhwere = 'Namangandan'

    let savedData = {
      qayerdan: fromWhwere,
      tuman: tuman,
      odam: odam,
      nechta: nechta,
      qachon: qachon,
      soat: soat,
      nomer: nomer,
    }



    let API = "https://6547824c902874dff3ac6623.mockapi.io/taksi/user/taksidata";
    axios.post(API, savedData)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    alert("Siz bilan 10 daqiqada bog'lanishadi")


    window.location.reload()
  }



  return (
    <div>
      <div className="from_toshkent_header">
        <h2>Namangandan Toshkentga <br /> Buyurtma Bering</h2>
      </div>
      <form onSubmit={sendData} className='from_toshkent' action="">
        <Link to={"/"}>
          <AiOutlineArrowLeft className='AiOutlineArrowLeft' />
        </Link>
        <div className="from_toshkent_login">
          <h2>Zakaz Qilish</h2>


          <input type="text" value={'Namangandan'} />



          <select value={tuman} onChange={(e) => setTuman(e.target.value)} required>
            <option value={""}>Tuman Tanlang</option>
            <option value="Shahar">Shahar</option>
            <option value="Sergili">Chorsu</option>
            <option value="Yunsabot">Chortoq</option>
            <option value="Angirin">Vakzal</option>
          </select>


          <select value={odam} onChange={(e) => setOdam(e.target.value)} required>
            <option required value={""}>Odam Yoki Poshta Tanlang</option>
            <option value="Odam">Odam</option>
            <option value="Poshta">Pochta</option>
          </select>


          <select value={nechta} onChange={(e) => setNechta(e.target.value)} required>
            <option value={""}>Nechta Mesta Tanlang</option>
            <option value="1 Mesta">1 Mesta</option>
            <option value="2 Mesta">2 Mesta</option>
            <option value="3 Mesta">3 Mesta</option>
            <option value="4 Mesta">4 Mesta</option>
          </select>


          <select value={qachon} onChange={(e) => setQachon(e.target.value)} required>
            <option value={""}>Qachinligini Tanlang</option>
            <option value="Dushanba">Dushanba</option>
            <option value="Seshanba">Seshanba</option>
            <option value="Chorshanba">Chorshanba</option>
            <option value="Payshanba">Payshanba</option>
            <option value="Juma">Juma</option>
            <option value="Shanba">Shanba</option>
            <option value="Yakshanba">Yakshanba</option>
          </select>


          <select value={soat} onChange={(e) => setSoat(e.target.value)} required>
            <option value={""}>Soatni Tanlang</option>
            <option value="12:00 01:00">12:00 01:00 Soat O'rtasida</option>
            <option value="01:00 02:00">01:00 02:00 Soat O'rtasida</option>
            <option value="02:00 03:00">02:00 03:00 Soat O'rtasida</option>
            <option value="03:00 04:00">03:00 04:00 Soat O'rtasida</option>
            <option value="04:00 05:00">04:00 05:00 Soat O'rtasida</option>
            <option value="05:00 06:00">05:00 06:00 Soat O'rtasida</option>
            <option value="06:00 07:00">06:00 07:00 Soat O'rtasida</option>
            <option value="07:00 08:00">07:00 08:00 Soat O'rtasida</option>
            <option value="08:00 09:00">08:00 09:00 Soat O'rtasida</option>
            <option value="09:00 10:00">09:00 10:00 Soat O'rtasida</option>
            <option value="10:00 11:00">10:00 11:00 Soat O'rtasida</option>
            <option value="11:00 12:00">11:00 12:00 Soat O'rtasida</option>
          </select>

          <input type="number" placeholder='Tel Nomer' value={nomer} onChange={(e) => setNomer(e.target.value)} required />
          <button type='submit'>Buyurtma Berish</button>

        </div>
      </form>
    </div>
  )
}

export default Toshkent