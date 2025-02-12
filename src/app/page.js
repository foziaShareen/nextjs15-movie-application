import Results from '@/components/Results';



export default async function Home() {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  // console.log(data)


  
  

  return (
    <div>
      <Results data={data} />
    </div>
  );
}