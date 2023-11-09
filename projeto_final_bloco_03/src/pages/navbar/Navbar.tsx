import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav className="max-w-full max-h-full bg-emerald-500">
      <div className="flex justify-between items-center mx-6 h-20">
        <div><Link to='/home' className='text-2xl font-bold'>Home</Link></div>

        <div className="flex justify-around items-center gap-6">
        <Link to='/categorias' className='font-[500]'>Categorias</Link>
          <Link to='/cadastroCategoria' className='font-[500]'>Cadastrar Categoria</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar