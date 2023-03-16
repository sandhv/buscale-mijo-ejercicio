export default function buscador ({onSearch, resultNumber}) {
    return (
    <div style={{textAlign:'center', margin:10}}>
        <input  onChange={({target:{value}})=>{
            onSearch(value);
        }} type="text" placeholder="Search" />
        <p style={{fontFamily:"sans-serif", fontSize:20, fontWeight:100, padding:10}}>Resultados: {resultNumber}</p>
    </div> )
}