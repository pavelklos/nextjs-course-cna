// DOMAIN/ = ROOT PAGE
// rafce
import Link from "next/link";

const HomePage = () => {
  return (
    <section>
      <h1>The Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit voluptate,
        iusto repellendus similique animi aliquid magni corrupti eaque, eos
        dicta ex eligendi. Animi, eveniet voluptatem. Voluptate architecto saepe
        minima facilis natus nemo tempore voluptatem fuga quam laboriosam culpa
        beatae similique voluptates eaque voluptatum modi, enim magnam sunt
        atque odio ex eveniet! Blanditiis cumque dolorem deleniti quidem
        expedita?
      </p>
      <ul>
        <li>
          {/* <a href='/news/nextjs-is-a-great-framework'>NextJS Is A Great Framework</a> */}
          <Link href='/news/nextjs-is-a-great-framework'>
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>
          <Link href='/news/something-else'>
            <a target='_blank' rel='noreferrer'>
              Something Else
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default HomePage;

// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }
