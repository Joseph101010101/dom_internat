import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderTop() {
  return (
    <header className="top-header">
        <div className="nav-links">
          <nav>
          <NavLink className="nav-link" to={"/"}>
              Главная
            </NavLink>
            <NavLink className="nav-link" to={"/document"}>
              Документы
            </NavLink>
            <NavLink className="nav-link" to={"/news"}>
              Новости
            </NavLink>
            
          </nav>
        </div>
      </header>
  )
}
