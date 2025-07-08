import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './MainPage.module.scss'
import { Header } from '@/widgets/Header/ui/Header'
import { Footer } from '@/widgets/Footer/ui/Footer'

const MainPage = () => {
  return (
    <>
      <Header />
      <div className={classNames(cls.MainPage, {}, [])}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo repellat, quas id eos nobis
        temporibus soluta aut sint aliquid repudiandae architecto? Odit, porro? Repellendus
        perferendis assumenda eaque distinctio perspiciatis ratione!
      </div>
      <Footer />
    </>
  )
}

export default MainPage
