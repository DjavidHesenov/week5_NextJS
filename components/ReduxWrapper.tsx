import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { authActions } from '../store/auth';
import {useDispatch } from 'react-redux';
import { ILogin } from '../interfaces';

interface Props {
    children: any,
}

const ReduxWrapper: NextPage<Props> = ({ children }) => {

    const dispatch = useDispatch()

    useEffect(() => {
  
      const saved = JSON.parse(localStorage.getItem('isAuth') || 'false') as ILogin[]
  
      if (saved) {
        dispatch(authActions.login())
      } else {
        dispatch(authActions.logout())
      }
  
    }, [dispatch])

    const isAuth = useSelector((state: any) => state.auth.isAuthenticated)

    return (
            <>
                {children}
            </>
    )
}

export default ReduxWrapper