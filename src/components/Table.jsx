import './table.css';

export default function Table({children}){
    return (
        
        <div className="grid">
            <h3>Nombre SANDY</h3>
            <h3>Apellido</h3>
            <h3>email</h3>
            <h3>Deuda</h3>

            {children}
        </div>
    )
}