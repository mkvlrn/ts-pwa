import { AppBar } from '@mui/material'
import { NavLink } from 'react-router-dom'

const pages = ['home', 'counter', 'quotes']

export function Navbar() {
  return (
    <AppBar
      position='static'
      color='primary'
      style={{
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
      }}
    >
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <NavLink to={`/${page === 'home' ? '' : page}`}>{page}</NavLink>
          </li>
        ))}
      </ul>
    </AppBar>
  )
}
