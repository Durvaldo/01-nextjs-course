import Link from '../src/components/Link';
import PageTitle from '../src/components/PageTitle';

// SSG - Static Site Generation 
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

// export async function getServerSideProps() {
//     console.log("Roda cada asceeo que você recebe")
//     só faz server side se precisar muito
// }

export async function getStaticProps() {
    // console.log("Roda somente em bild time")
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((resposta) => {
            return resposta.json()
        })
        .then((resposta) =>{
            return resposta
        })


    return {
        props: {
            qualquercoisa: 'Que eu passar aqui',
            faq
        },
    }
}

export default function FAQPage({ faq }) {
    console.log(faq)
    // const [faq, setFaq] = useState([])
    // useEffect(() => {
    // }, [])

    return (
        <div>
            <PageTitle titulo="FAQ - Alura Cases Campanha"/>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}