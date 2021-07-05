import Head from 'next/head'
import Image from 'next/image'
import vercel from '../public/vercel.svg'
import styles from '../styles/Home.module.scss'


  // export const getServerSideProps = () => {
  //   console.log(process.env.SECRET_VARIABLE)
  //   return {
  //     props : {

  //     }
  //   }
  // }


  // * on  build time creats Static html + json
  export const getStaticProps = async (context: any) => {
    // console.log(context)
    // pieklust pathiem un tad var buildot tos page
    const {params} = context

    const fetchSomeData = () => {
      // fetch
      return 'data'
    }
    const data = await fetchSomeData();
    return {
      props: {
          someData: data,
          // seconds to attempt to create new pages agaian.
          // works only on production mode, for example on versac deploy
          revalidate: 10
      }
    }
  }


// need params to use this  /shop/[id]
// next.js likes to run getStaticProps on build time
// to use, page will need to be dynamic
// export const getStaticPaths = () => {

// return {
//   fallback: false,
//   // on false, builds every page on build time with every path, 
//   // ja ir 3 producti, tad aizejot uz lapu shop/product-4 => būs 404
//   // on true, ja aiziet uz route, kas nav buildots, tiek izsaukta getStaticProps again un mēģināts atrast to route. 
//   // on 'blocking' ,not send any response 
//   // pros => 1. no flasges of loading/loader
//   // cons => 2. first visitior delay

//   paths : [] // pages, what i want to be build  @ build time
//   // [{ params: { id: 'product1' }}, { params: {'product2' }}, { params: { 'product3' }}]
// }
// }


export default function Home() {


  
  return (
    <div >
      <Head>
        <title>NEXT NEWS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="container">
      <div className={styles.main}>
        <Image alt="Vercel logo" src="/vercel.svg" width={100} height={30} priority/>
        <h1 className="title"> This is title</h1>
        <div className="grid">
          <div className="box1">
            <h1>Box1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic.</p>
          </div>
          <div className="box2">
            <h1>Box2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic.</p>
          </div>
          <div className="box3">
            <h1>Box3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic.</p>
          </div>
          <div className="box4">
            <h1>Box4</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic.</p>
          </div>
          <div className="box5">
            <h1>Box5</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic.</p>
          </div>
          <div className="box6">
            <h1>Box6</h1>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum harum veritatis dolore et nemo modi magnam atque vitae ipsum? Culpa.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed ea molestiae at rem ullam sequi odio eius dignissimos delectus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quo fugiat aperiam laborum facere tempore, ipsam id accusantium eligendi saepe sit. Earum accusantium officia a hic, dolorem quaerat provident vero?</p>
          </div>
          <div className="box7">
            <h1>Box7</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic.</p>
          </div>
        </div>
        <div className="image-style">
        <Image alt="Vercel logo" src={vercel} layout="fill"/>
        </div>
        <h1>Next.js News app</h1>
        <div>
        <Image alt="test image" src="/testImage.jpg" width={500} height={300} priority   />
        </div>
        <div>
        <Image alt="Vercel logo" src="https://picsum.photos/200/300" width={200} height={300} />
        </div>

        <Image
        alt="Next.js logo"
        src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
        width={1200}
        height={400}
      />
      </div>
    </div>
    </div> 
  )
}


// ***** 
// env.variables
// *****
// .env.local
// **
// only get acces in server side
// SECRET_VARIABLE = my.secret
// **
// use NEXT_PUBLIC_ TO get access in browser variables. 
// NEXT_PUBLIC_MY_FRONT_VALUE = THIS.IS.MY.VALUE
// **  

// call with process.env.variable_name
// ***

// *****
// getServerSideProps
// *****
// SSR
// getServerSideProps funkcija, tiek izsukta katru reizi, kad taisa tās lapas pieprasījumu.

// izpildās funkcija un tiek ģenerēts html, un parādīts client side

// ja nav funkcija, tad notiek static site renderēšana
// ..
// getServerSideProps  var return {
// notFound : true => aizsuta uz 404 lapu,ja teiksim nav dati sanemiti,
// redirect: {
// destination:'http//somthing'
// parmanent : true/false vai cachos redirectu, palasit sikāk

// props {
// someProps : someData => defaul ko atgriež
// }
// }
// }

// *****
// getStaticProps
// *****
// trying to build pages on build time

// statiski uzbūvē pages priekš dinamiskie routiem
// ***
// Incrementally/Lazily build website
// ja kāds apmeklē dinamisko route, tad getStaticProps izveidos lapu un saglabās cache vai memory
// *
// ja ir 35mil diynamic routes (/store/[id]) , sakuma bus 0 page
// lidz ko atver store/3, taa to lapu saglabā
// un ja kāds cits lietotājs atver to lapu, tad automātiski tik pasniegta kā static page

// ***
// piemēri...
// ***
// export const getStaticProps = (context) 

// revalidate : 5 => dev mode stradas katru reizi kad refresho,
// bet palaižot saitu, static page ģenerēsies ne biežāk kā 5 sekundes pēc pēdējā clicka...
// ***