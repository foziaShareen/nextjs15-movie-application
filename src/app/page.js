import React from 'react';
const API_KEY = process.env.API_KEY
export default async function Home({ searchParams }) {
 const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://www.omdbapi.com?i=tt3896198&apikey=${API_KEY}&language=en-US&page=1&${
    genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
  }`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Received non-JSON response');
  }

  const data = await res.json();
  const results = data; // Adjust this line based on the actual structure of the response
  console.log(results.Year);

  return (
    <div>
      {/* <Results results={results} /> */}
    </div>
  );
}
