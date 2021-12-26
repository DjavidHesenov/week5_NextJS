import Link from 'next/link'
import Head from 'next/head'
import type { NextPage } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

interface Props {
    children: any,
    title: string
}

const MainLayout: NextPage<Props> = ({ children, title = 'Next App' }) => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(authActions.logout())
    }
    

    const isAuth = useSelector((state: any) => state.auth.isAuthenticated)

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="next,javascript,nextjs,react" />
                <meta name="description" content="this is youtube tutorial for next" />
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <div
                    className="container mx-auto px-6 py-2 flex justify-between items-center">
                    <p
                        className="font-bold text-2xl lg:text-4xl"
                    >
                        Landing Page
                    </p>
                    <div className="hidden lg:block">
                        <ul className="inline-flex">
                            {
                                !isAuth &&
                                <li>
                                    <Link href="/login">
                                        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                            Log In
                                        </a>
                                    </Link>
                                </li>
                            }

                            {
                                isAuth &&
                                <li>
                                    <Link href="/">
                                        <a onClick={logoutHandler} className="bg-red-500 ml-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                            Log Out
                                        </a>
                                </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout