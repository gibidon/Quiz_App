import cls from './ErrorPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';

export const ErrorPage = () => {
  // console.log('cls', cls);
  return (
    <div className={classNames(cls.ErrorPage, {}, [])}>
      <p>Произошла непредвиденная ошибка..</p>
      <Loader />
    </div>
  );
};
