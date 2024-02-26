import { REPO_URL } from '@/consts';

export default function ComoContribuir() {
  return (
    <div>
      <h1 className='text-4xl font-bold mb-12'>Como Contrinuir?</h1>

      <p>Não existindo uma entidade central nem um escrutínio contínuo das promessas eleitorais de cada partido, essa tarefa recai sobre os cidadãos.</p>
      <p className='mt-2'>Através da utilização de software open-source e com a ajuda de toda a comunidade, as promessas eleitorais podem ser monitorizadas.</p>

      <h3 class="text-xl font-bold my-4">Para contribuir segue os seguintes passos:</h3>
      <ol class="list-decimal pl-4 mb-4">
          <li>Criar conta no <a href="https://github.com" class="text-blue-500 hover:underline">Github.com</a></li>
          <li>Abrir o repositório <a href={REPO_URL} class="text-blue-500 hover:underline">{REPO_URL}</a></li>
          <li>Na pasta <code class="bg-gray-200 px-1 rounded">promessas_data/&lt;partido&gt;</code> encontras o documento que pretendes</li>
          <li>Preenches os campos <code class="bg-gray-200 px-1 rounded">fulfilled_at</code> e <code class="bg-gray-200 px-1 rounded">links_to_news_articles</code> (lista)</li>
          <li>Abres um pull request e aguardas review da comunidade</li>
      </ol>

      <div className='mt-6'>
        <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/0J9wurWDF28?si=RQpAjPXGLVrVa3Et" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export function generateMetadata() {
  return {
    title: "Como Contribuir?"
  }
}
