'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({title ,param}) => {
  const searchparam=useSearchParams()
  const genre=searchparam.get('genre');
  return (
    <div className={`hover:text-amber-600 font-semibold ${genre===param ?'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg ':''}`}>
      <Link href={`/?genre=${param}`}>{title}
      </Link>
    </div>
  )
}

export default NavbarItem
