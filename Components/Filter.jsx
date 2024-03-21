import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar: </h2>
      <div className="filter-options">
        <p>Status: </p>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all"> Todas </option>
          <option value="Completed"> Completas </option>
          <option value="Incompleted"> Incompleta </option>
        </select>
      </div>

      <div>
        <p>Ordem alfabética</p>
        <button onClick={() => setSort("Asc")}>Crescente</button>
        <button onClick={() => setSort("Desc")}>Decrescente</button>
      </div>
    </div>
  )
}

export default Filter;
