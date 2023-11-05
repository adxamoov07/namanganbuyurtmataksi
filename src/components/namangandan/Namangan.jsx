import React from 'react'
import './Namangan.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'


function Namangan() {
  return (
    <div>
      <div className="from_toshkent_header">
        <h2>Namangandan Toshkentga <br /> Buyurtma Bering</h2>
      </div>
      <div className='from_toshkent'>
        <Link to={"/"}>
          <AiOutlineArrowLeft className='AiOutlineArrowLeft' />
        </Link>
        <div className="from_toshkent_login">
          <h2>Zakaz Qilish</h2>
          <input type="text" value={'Toshkentdan'} />
          <select>
            <option value="Shahar">Shahar</option>
            <option value="Sergili">Sergili</option>
            <option value="Yunsabot">Yunsabot</option>
            <option value="Angirin">Angirin</option>
          </select>
          <select>
            <option value="Odam">Odam</option>
            <option value="Poshta">Pochta</option>
          </select>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select>
            <option value="Dushanba">Dushanba</option>
            <option value="Seshanba">Seshanba</option>
            <option value="Chorshanba">Chorshanba</option>
            <option value="Payshanba">Payshanba</option>
            <option value="Juma">Juma</option>
            <option value="Shanba">Shanba</option>
            <option value="Yakshanba">Yakshanba</option>
          </select>
          <select>
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

          <input type="number" placeholder='Tel Nomer' />
          <button>Buyurtma Berish</button>

        </div>
      </div>
    </div>
  )
}

export default Namangan