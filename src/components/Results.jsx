


export default function Results({ data }) {
  return (
    <div >
      
        {Array.isArray(data) && data.map((data) => (
          <div key={data.id} >

            <h2>{data.title}h2</h2> 
            
          </div>
        ))}
    </div>
  );
}