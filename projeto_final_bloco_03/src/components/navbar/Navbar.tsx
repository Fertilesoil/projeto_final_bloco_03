

function Navbar() {
  return (
    <nav className="max-w-full max-h-full bg-emerald-500">
      <div  className="flex justify-between items-center mx-6 h-20">
        <div><a className="font-[600] text-xl" href="#">Navbar</a></div>

        <div>
          <ul className="flex justify-around items-center gap-6">
            <li><a className="font-[500]" href="#">Categorias</a></li>
            <li><a className="font-[500]" href="#">Cadastrar</a></li>
            <li><a className="font-[500]" href="#">Categoria</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar