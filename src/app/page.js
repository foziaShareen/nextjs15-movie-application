import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  // const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9c01baf6&language=en-US&page=1`,
  );
  const data = await res.json();
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const results = data; // Adjust this line based on the actual structure of the response
  console.log(results);

  return (
    <div>
      {/* <Results results={results} /> */}
    </div>
  );
}
