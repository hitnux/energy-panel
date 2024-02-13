const List = ({data}) => {
 return (<div className="container">
 <img id="hastaneBg" src="/hastane.jpg" />
 <div className="overlay"></div>
 <ul className="list">
    <li className="item-title">Bina Enerji Tüketim Değerleri</li>
     {data?.map((item, ind) => (
         <li key={item.type} className={`item item-${ind}`}>
             <div className="card">
                 <div className="info">
                     <div className="icon"><img src={item.icon} width="48" height="48" /></div>
                     <span className="title">{item.title}</span>
                 </div>
                 <span className="value">{item.data[0]?.Value?.Value || 0} kW/h</span>
             </div>
         </li>
     ))}
 </ul>
</div>)   
}

export default List;