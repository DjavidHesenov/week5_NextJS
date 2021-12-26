import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter()
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated)

  const buttonHandler = () => {
    router.push('/forecast')
  }

  return (
    <MainLayout title="Landing">
      <>
        <div
          className="py-20"
          style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%" }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-2 text-white">
              Weather forecasting if you Log In!
                    </h2>
            <h3 className="text-2xl mb-8 text-gray-200">
              Monitor weather in any city you want
                    </h3>
            <button
              onClick={buttonHandler}
              className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
            >
              See weather Forecast
                    </button>
          </div>
        </div>
        <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Testimonials
                    </h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente sit aliquam quidem et maiores suscipit itaque unde molestias. Iste ratione fugit exercitationem neque autem a soluta laboriosam nihil, ex repellendus.
                                </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    John Doe
                                </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Sapiente sit aliquam quidem et maiores suscipit itaque unde molestias. Iste ratione fugit exercitationem neque autem a soluta laboriosam nihil, ex repellendus.
                                </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Jane Doe
                                </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.
                                </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    James Doe
                                </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "#667eea" }}>
          <div className="container mx-auto px-6 text-center py-20">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">
              Limited Time!
                    </h2>
            <h3 className="my-4 text-2xl text-white">
              Get started ASAP!
                    </h3>
            <button
              onClick={buttonHandler}
              className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
            >
              See weather Forecast
                    </button>
          </div>
        </section>
      </>
    </MainLayout>
  )
}

export default Home
