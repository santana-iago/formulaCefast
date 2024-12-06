import Head from "next/head";


export default function Home() {
  return (
    <>

      <Head>
        <title>Fórmula Cefast - Início</title>
        <meta name="description" content="Site oficial da equipe Fórmula Cefast, a equipe número 1 do Fórmula SAE Brasil." />
      </Head>
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Fórmula Cefast</h1>
        <p className="text-lg mb-6">A equipe número 1 do Formula SAE Brasil.</p>
        <div className="flex gap-6">
        </div>
      </main>
    </>
  );
}
