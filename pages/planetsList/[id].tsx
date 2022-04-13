function PlanetPage({ planet }:{planet: any}) {
  return (
    <main>
      <h1>{planet?.name}</h1>
      <p>Population: {planet?.population}</p>
      <p>Terrain: {planet?.terrain}</p>
    </main>
  );
}  

export async function getStaticProps(context: any) {
  const res = await fetch(`https://swapi.dev/api/planets/${context.params.id}`);
  const data = await res.json();

  return { props: { planet: data } };
}

export async function getStaticPaths() {
  const res = await fetch('https://swapi.dev/api/planets')
  const data = await res.json()

  const paths = data.results.map((_planet: string, i: string) => ({
    params: {
      id: i.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default PlanetPage