// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://swapi.dev/api/planets");
  const data = await res.json();
  // Pass data to the page via props
  return { props: { planets: data.results } };
}

// An object with a props property is returned from the function
// What we return as props will be available as props in the PlanetsPage function
function Page({ planets }: { planets: any }) {
  return (
    <main>
      <h1>Planets</h1>
      {planets.map((planet: any) => (
        <div key={planet.name}>
          <h2>{planet.name}</h2>
          <p>Population: {planet.population}</p>
          <p>Terrain: {planet.terrain}</p>
        </div>
      ))}
    </main>
  );
}

export default Page;
