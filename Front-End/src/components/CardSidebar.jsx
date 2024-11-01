export default function CardSidebar() {
  return (
    <>
      <div className="bg-gray-800 text-white p-2 rounded-lg shadow-lg mr-4 ml-2">
        <h2 className="text-xl font-bold mb-2">Sobre o Grupo</h2>
        <p className="mb-2">Membros: <strong>Henrique</strong>, <strong>Vitor Diamantino</strong> e <strong>Eric</strong></p>
        <h3 className="text-lg font-semibold">Gostos Musicais:</h3>
        <ul className="ml-4">
          <li><strong>Henrique:</strong> Funk, Trap, Pagode</li>
          <li><strong>Vitor D:</strong> Funk, Trap</li>
          <li><strong>Eric:</strong> Trap, Funk</li>
        </ul>
      </div>
    </>


  )

}